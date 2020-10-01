import React, { ReactElement } from 'react'
import { Hidden } from './components'
import {
  Header,
  Hero,
  Infos,
  Faq,
  ExclusiveContent,
  CourseHighlights,
  LessonPlan,
  MoreCourses,
  Contact,
  StudentComments,
  UserComments,
  RelatedArticles,
  Footer,
  Slide,
} from './Sections'

export const Website = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <Infos />
      <Slide />
      <Hidden up="md">
        <Faq />
      </Hidden>
      <ExclusiveContent />
      <Hidden up="md">
        <CourseHighlights />
      </Hidden>
      <Hidden down="md">
        <LessonPlan />
      </Hidden>
      <MoreCourses />
      <Contact />
      <Hidden down="md">
        <StudentComments />
      </Hidden>
      <Hidden up="md">
        <UserComments />
      </Hidden>
      <RelatedArticles />
      <Footer />
    </>
  )
}
