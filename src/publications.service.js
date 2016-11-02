class PublicationApi {

  constructor($http) {
    this.$http = $http;
    this.url = 'http://localhost/api/publications';
  }

  findAll() {
    return this.query();
  }

  query(acc, page) {
    const config = { params: { page: page || 0, size: 50 } };
    return this.$http.get(this.url, config)
      .then(res => this.nextPage(acc || [], res.data));
  }

  nextPage(acc, response) {
    const metadata = response.metadata;
    const content = acc.concat(response.content);
    return metadata.last ? content : this.query(content, metadata.page + 1);
  }

}

module.exports = PublicationApi;
