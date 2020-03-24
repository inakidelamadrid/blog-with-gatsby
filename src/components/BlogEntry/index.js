import React from "react"
import styles from "./styles.module.scss"

const BlogEntry = props => {
  return (
    <>
      <img src="florian-klauer.jpg" class="img-responsive" />

      <section className={styles.post}>
        <header className="entry-header">
          <img
            className={styles.entryAvata}
            alt="Paul Laros"
            height="52"
            width="52"
            src="http://www.gravatar.com/avatar/ea67e860739cd91fe40b6797e97e6820.jpg?s=52"
          />
          <h2 className={styles.entryTitle}>
            <a href="single.html">Von - Minimalist Blog Theme</a>
          </h2>
          <p className={styles.entryMeta}>
            Posted on{" "}
            <a className="entry-date" href="date.html">
              July 19, 2013
            </a>{" "}
            | By{" "}
            <a className={styles.entryAuthor} href="author.html">
              Paul Laros
            </a>{" "}
            | Tags{" "}
            <a className="label label-danger" href="tag.html">
              CSS3
            </a>
          </p>
        </header>
        <div className={styles.entryDescription}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui.
          </p>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
            eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
            amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
            bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
            libero. Fusce vulputate eleifend sapien. Vestibulum purus quam,
            scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem
            in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; In ac dui quis mi consectetuer lacinia.
          </p>
        </div>
      </section>
    </>
  )
}
export default BlogEntry
