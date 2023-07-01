import styles from '../../styles/companyDetails/CompanyDetails.module.css';

export default function CompanyDetails () {
    return(
        <section className={styles.container}>
            <div className={styles.companyIntro}>
                <h1 className={styles.title}>
                    What’s different about Manage?
                </h1>
                <p className={styles.desc}>
                    Manage provides all the functionality your team needs, 
                    without the complexity. Our software is tailor-made for
                    modern digital product teams. 
                </p>
            </div>
            <div className={styles.companyDetails}>
                <div className={styles.titleBar}>
                    <span>01</span>
                    <h2>Track company-wide progress</h2>
                </div>
                <p className={styles.detailDesc}>
                    See how your day-to-day tasks fit into the wider vision. 
                    Go from tracking progress at the milestone level all the way done to the smallest of details. 
                    Never lose sight of the bigger picture again.
                </p>
                <div className={styles.titleBar}>
                    <span>02</span>
                    <h2>Advanced build-in reports</h2>
                </div>
                <p className={styles.detailDesc}>
                    Set internal delivery estimates and track progress toward company goals. 
                    Our customisable dashboard helps you build out the reports you need to 
                    keep key stakeholders informed.
                </p>
                <div className={styles.titleBar}>
                    <span>03</span>
                    <h2>Everything you need in one place</h2>
                </div>
                <p className={styles.detailDesc}>
                    Stop jumping from one service to another to communicate, store files, 
                    track tasks and share documents. Manage offers an all-in-one team productivity solution.
                </p>
            </div>
        </section>
    )
}