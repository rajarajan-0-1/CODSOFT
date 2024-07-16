import styles from './ProjectStyles.module.css';
import project from '../../assets/project.png'
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
        <>
            <section className={styles.container} id='projects'>
                <h1 className={styles.sectionTitle}>
                    Projects
                </h1>
                <div className={styles.projectsContainer} data-aos="fade-up"
     data-aos-duration="2000">
                    <ProjectCard 
                        URL='https://sushi-site-rajarajan.netlify.app/'
                        projectTitle = 'A Sushi Site'
                        projectDescription = 'A Sushi Restaurant Site'
                    />
                    <ProjectCard 
                        URL='https://clone-9718e.web.app/'
                        projectTitle = 'Amazon Clone'
                        projectDescription = 'A Clone of Amazon Application'
                    />
                    <ProjectCard 
                        URL='https://linked-clone-rajarajan.web.app'
                        projectTitle = 'Linkedin Clone'
                        projectDescription = 'A Clone of Linkedin Application'
                    />
                </div>
            </section>
        </>
    )
}

export default Projects