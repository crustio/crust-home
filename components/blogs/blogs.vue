<template>
  <div class="container-fluid row-blog">
    <div class="container no-padding blogs-container">
      <div class="title-container">
        <div class="sub-title color-main flex-grow-1">
          {{ $t("blogs.title") }}
        </div>
      </div>
      <div class="blogs-container">
        <div v-for="(post, i) in posts" :key="i" class="medium-post">
          <img
            style="width: 100%"
            class="post-thumb"
            v-bind:src="
              'https://cdn-images-1.medium.com/fit/t/800/480/' +
              post.virtuals.previewImage.imageId
            "
          />
          <h4 class="fm-post-title">
            <a v-bind:href="profileURL + post.uniqueSlug"> {{ post.title }} </a>
          </h4>
          <p class="fm-post-sub-title">{{ post.content.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      profileURL: "https://medium.com/crustnetwork/",
      posts: [
        {
          id: "f7ff837ed0ef",
          title: "Crust's Cross-Chain dStorage Solution",
          detectedLanguage: "en",
          content: {
            subtitle: "Introduction",
          },
          virtuals: {
            previewImage: {
              imageId: "0*hJjlbX5NPOpLtOGQ",
            },
            subtitle: "Introduction",
          },
          slug: "crusts-cross-chain-dstorage-solution",
          uniqueSlug: "crusts-cross-chain-dstorage-solution-f7ff837ed0ef",
        },
        {
          id: "2b25d5436ddb",
          title: "Community Contribution Rewards for Crust Network",
          content: {
            subtitle:
              "Crust Network is a community-focused project. All campaigns we launch are always a way to reward the community with their help to drive the…",
          },
          virtuals: {
            previewImage: {
              imageId: "1*C9zR-HIhPoK5uQUSOEpdNQ.jpeg",
            },
            subtitle:
              "Crust Network is a community-focused project. All campaigns we launch are always a way to reward the community with their help to drive the…",
          },
          slug: "community-rewards-for-crust-mainnet-launch",
          uniqueSlug: "community-rewards-for-crust-mainnet-launch-2b25d5436ddb",
        },
        {
          id: "dc9b90f7e175",
          title:
            "Crust Network Partners with NEAR Protocol to Introduce Decentralized Storage Solutions",
          content: {
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          virtuals: {
            previewImage: {
              imageId: "0*D8ypVJmm0n5F-F17.jpeg",
            },
            subtitle:
              "We are excited to announce that Crust Network, a decentralized storage network that underpins Web 3.0 style data & file architecture, is…",
          },
          slug: "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions",
          uniqueSlug:
            "crust-network-partners-with-near-protocol-to-introduce-decentralized-storage-solutions-dc9b90f7e175",
        },
      ],
    }
  },
  async created() {
    const maxPostCount = 3
    const resp = await this.$axios.$get(
      "https://data.feedmirror.com/-MmKpg8kfvTBHNkj5474.json"
    )
    const data = resp.split("])}while(1);</x>")[1]
    const feeds = JSON.parse(data)
    const fmPosts = feeds.payload.references.Post
    const fmPostKeys = Object.keys(fmPosts)
    let fmUser = ""
    if (feeds.payload.user) {
      fmUser = "@" + feeds.payload.user.username
    } else {
      fmUser = feeds.payload.collection.slug
    }
    const posts = []
    fmPostKeys.forEach(function (element, index) {
      if (posts.length < maxPostCount) {
        posts.push(fmPosts[element])
      }
    })
    this.posts = posts
    this.profileURL = "https://medium.com/" + fmUser + "/"
  },
}
</script>

<style lang="scss" scoped>
.row-blog {
  background-image: url("~/assets/images/back-devteam.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.title-container {
  .sub-title {
    padding-top: 50px;
    color: white;
  }
}

.blogs-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .medium-post {
    display: inline-block;
    width: 380px;
    min-height: 380px;
    background: #efedea;
    border-radius: 10px;
    padding: 20px;

    img.post-thumb {
      border-radius: 0.5em;
    }

    &:hover {
      .fm-post-title {
        margin-top: 16px;
        margin-bottom: 16px;
        a {
          color: #1f1f1f;
        }
      }
      .fm-post-sub-title {
        color: rgba(31, 31, 31, 0.75);
      }
    }
    .fm-post-title {
      margin-top: 16px;
      margin-bottom: 16px;
      a {
        color: #1f1f1f;
        height: 38px;
        font-weight: bold;
        line-height: 29px;
      }
    }
    .fm-post-sub-title {
      color: rgba(31, 31, 31, 0.75);
      line-height: 17px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}

@media screen and (max-width: 800px) {
  .container-fluid {
    .container {
      .blogs-container {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

.container-fluid {
  .container {
    @media screen and (max-width: 1000px) {
      &.blogs-container {
        max-width: 95%;
      }
    }
    .blogs-container {
      @media screen and (max-width: 900px) {
        .medium-post {
          width: 260px;
        }
      }
      @media screen and (max-width: 1000px) {
        .medium-post {
          width: 280px;
        }
      }

      @media screen and (max-width: 1280px) {
        .medium-post {
          width: 300px;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .container-fluid {
    padding-bottom: 60px;
    .container {
      display: flex;
      flex-direction: column;
      min-height: 200px;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .medium-post {
        width: 380px;
        margin-top: 1em;
        margin-bottom: 1em;
      }

      .title-container {
        display: flex;
        align-items: center;
        margin-bottom: 50px;

        .button-prev {
          margin-right: 50px;
        }
      }
    }
    .swiper-slide {
      width: 500px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    padding-bottom: 50px;
    background-image: url("~/assets/images/back-devteam.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .container {
      display: flex;
      flex-direction: column;
      &.no-padding {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .title-container {
        display: flex;
        align-items: center;
        .sub-title {
          text-align: center;
        }

        .button-prev,
        .button-next {
          display: none;
        }
      }

      .blogs-container {
        position: relative;

        .medium-post {
          margin-top: 1em;
          margin-bottom: 1em;
        }
      }
    }
    .swiper-slide {
      width: 100%;
    }
  }
}
</style>
