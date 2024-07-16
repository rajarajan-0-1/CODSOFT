import styles from './ContactStyles.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.container} data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <h1 className="sectionTitle">Contact</h1>
      <form action="" ata-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div className="formGroup" ata-aos="fade-up"
    data-aos-anchor-placement="top-bottom" >
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;