import styles from '../styles/Projects.module.css'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Button from './Button'
import Project from './projects/Project'
import { projects as projectsData } from '../constants/projects'
import { AppProps } from 'next/dist/next-server/lib/router/router'

const projects = projectsData.map(({ id, title, date, description, tech, img, src, src_github }: any) => {
  return (
    <li className={styles.list_item} key={id}>
      <Project
        title={title}
        date={date}
        description={description}
        tech={tech}
        img={img}
        src={src}
        src_github={src_github}
      />
    </li>
  )
})

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className='heading'>
        <h1>A Few Other Things I&apos;ve Built</h1>
      </div>

      <ul className={styles.list}>{projects}</ul>

      <div className='btn-container'>
        <Link href='#'>
          <a>
            <Button style='outline' size='large'>
              View List
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
