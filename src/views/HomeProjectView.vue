<script lang="ts" setup>
import AnounceCard from '../components/layouts/AnounceCard.vue'
import ProjectCard from '../components/layouts/ProjectCard.vue'
import TrendCard from '../components/layouts/TrendCard.vue'

const projects = [
  {
    title: 'Super Cool Project',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi...',
  },
  {
    title: 'Another Cool Project',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi...',
  },
  {
    title: 'Yet Another Project',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi...',
  },
]

const announcement = [
  {
    title: 'Site Maintenance',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
  },
  {
    title: 'Community Share Day',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
  },
  {
    title: 'Updated Privacy Policy',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
  },
]

const trendingUsers = [
  {
    src: 'https://robohash.org/irwi32.png?set=set4',
    user: '@tegan',
    description: 'World Peace Builder',
  },
  {
    src: 'https://robohash.org/ijrwi32.png?set=set4',
    user: '@morgan',
    description: 'Super cool Project',
  },
  {
    src: 'https://robohash.org/irw2.png?set=set4',
    user: '@kindall',
    description: 'Life Changing App',
  },
  {
    src: 'https://robohash.org/ireqwe2.png?set=set4',
    user: '@alex',
    description: 'No Traffic Maker',
  },
]
</script>
<template>
  <div class="container project-box">
    <section class="dashboard">
      <div class="project">
        <h4>Your Projects</h4>
        <div class="project-grid">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="index"
            :title="project.title"
            :description="project.description"
          />
        </div>
      </div>
      <section class="side">
        <div class="announcement">
          <h4>Announcements</h4>
          <div class="background-box">
            <AnounceCard
              v-for="(announce, index) in announcement"
              :key="index"
              :title="announce.title"
              :description="announce.description"
            />
          </div>
        </div>
        <div>
          <h4>Trending</h4>
          <div class="background-box trending">
            <TrendCard
              v-for="(trend, index) in trendingUsers"
              :key="index"
              :src="trend.src"
              :user="trend.user"
              :description="trend.description"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<style></style>
