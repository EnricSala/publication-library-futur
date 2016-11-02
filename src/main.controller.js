class MainController {

  constructor($scope, $document, $http, FileManager, Publications) {
    this.$scope = $scope;
    this.$document = $document;
    this.$http = $http;
    this.FileManager = FileManager;
    this.Publications = Publications;
    this.init();
  }

  init() {
    this.publications = [];
    this.focused = {};
    this.selection = [];
    this.isLoading = false;

    // Load all publications
    this.Publications.findAll().then(list => {
      console.log(`Loaded ${list.length} publications`);
      this.publications = list;
    });

    // Get webview and setup event listeners
    this.webview = this.$document[0].getElementById('web-display');
    this.webview.addEventListener('did-finish-load',
      url => this.setLoading(false));
    this.webview.addEventListener('did-start-loading',
      url => this.setLoading(true));
  }

  setLoading(state) {
    this.isLoading = state;
    this.$scope.$apply();
  }

  searchPublication(publication) {
    if (this.isLoading) return;
    console.log(`Selected publication: ${publication.title}`);
    this.focused = publication;
    const query = new Buffer(publication.title).toString('base64')
    this.webview.loadURL(`http://futur.upc.edu/publicacions/t/${query}`);
  }

  addToSelection() {
    if (this.focused.id) {
      const isMissing = this.selection.indexOf(this.focused) < 0;
      if (isMissing) this.selection.push(this.focused);
    }
  }

  exportResult() {
    this.FileManager.exportResult(this.selection);
  }
}

module.exports = MainController;
