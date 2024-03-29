import styles from '../styles/Features.module.css'
import Feature from './elements/Feature'
import { shapeFeatures } from '../utilities/sort'
import { useContext } from 'react'
import { LocaleContext } from './Layout'
import { Project } from '../interfaces/projects'

const Features = ({ features }: any) => {
  const { t, locale } = useContext(LocaleContext)

  const projects = shapeFeatures(features).map(({ id, title, date, description, tech, img, src, src_github }: any) => {
    return (
      <li className={styles.list_item} key={id}>
        <Feature
          title={title}
          date={new Date(date).getFullYear()}
          description={description[locale]}
          tech={tech}
          img={img}
          src={src}
          src_github={src_github}
        />
      </li>
    )
  })

  return (
    <section id='experience'>
      <div className={styles.container}>
        <div className={`heading ${styles.heading}`}>
          <h1>{t.experienceHeading}</h1>
        </div>
        <ul className={styles.list}>{projects}</ul>
      </div>
    </section>
  )
}

export default Features
