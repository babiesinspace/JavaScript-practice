let myHandle = $("#handle")
let myAvatar = $("#avatar")
let repoList = $("#repos")
let followerList = $("#followers")

$.ajax({
  url: "https://api.github.com/users/babiesinspace",
  success: function(response){
    $(myHandle).text(response.login)
    $(myAvatar).attr("src", response.avatar_url)
    repoList = response.repos_url
    followerList = response.followers_url
    getRepos(repoList)
    getFollowers(followerList)
  },
  error: function(e){
    console.log(e)
  }
})

function getRepos(urlString){
  $.ajax({
    url: repoList,
    success: function(response){
      response.forEach(function(repo){
        let name = repo.name.split("-").join(" ")
        $(`<li><a href="${repo.url}">${name}</a></li>`).appendTo("#repos")
      })
    },
    error: function(e){
      console.log(e)
    }
  })
}

function getFollowers(urlString){
  $.ajax({
    url: followerList,
    success: function(response){
      response.forEach(function(follower){
        $(`<li><img src="${follower.avatar_url}"><a href="${follower.url}">${follower.login}</a></li>`).appendTo("#followers")
      })
    },
    error: function(e){
      console.log(e)
    }
  })
}

