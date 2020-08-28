import fetch from "node-fetch";

class GitHub {
  constructor() {
    this.client_id = "9e661ab9f710d2a2b10f";
    this.client_secret = "7d8f8822bf1c92f9c448eeef29f517c0b7bedac0";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repose = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
