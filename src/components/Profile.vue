<template>
  <div>
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img
            src="${user.avatar_url}"
            alt="Github User Avatar for user ${user.name}"
            title="Github user avatar for user ${user.name}"
            class="img-fluid mb-2"
          />
          <a
            href="${user.html_url}"
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary btn-block mb-4"
          >
            View Profile
          </a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">
            Public Repos: ${user.public_repos}
          </span>
          <span class="badge badge-secondary">
            Public Gists: ${user.public_gists}
          </span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br />
          <br />
          <ul class="list-group">
            <li class="list-group-item">Name: ${user.name} (${user.login})</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website / Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
