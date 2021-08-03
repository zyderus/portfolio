import styles from '../styles/Features.module.css'
import Feature from './elements/Feature'
import { projects as features } from '../constants/projects'
import { shapeFeatures } from '../utilities/sort'
import { useContext } from 'react'
import { LocaleContext } from './Layout'

const projects = shapeFeatures(features).map(({ id, title, date, description, tech, img, src, src_github }: any) => {
  return (
    <li className={styles.list_item} key={id}>
      <Feature
        title={`${title} ${new Date(date).getFullYear()}`}
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

const Features = () => {
  const { t } = useContext(LocaleContext)

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
