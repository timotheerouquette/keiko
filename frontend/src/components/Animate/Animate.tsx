import styles from "./Animate.module.css"

export const Animate =
  <P extends object>(animation: "tada" | "wobble") =>
  (BaseComponent: React.ComponentType<P>) =>
  // eslint-disable-next-line react/display-name
  (props: P) => {
    if (animation == "tada") {
      return (
        <div className={styles.tadaAnimation}>
          <BaseComponent {...props} />
        </div>
      )
    } else {
      return (
        <div className={styles.wobbleAnimation}>
          <BaseComponent {...props} />
        </div>
      )
    }
  }
