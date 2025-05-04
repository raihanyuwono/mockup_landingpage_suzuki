"use client";
import styles from "@/styles/form.module.css";
import data from "@/data/dataCollection.json";
import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();
    return router.push("/thankyou");
  }

  return (
    <form onSubmit={handleSubmit} method="post" autoComplete="on" className={styles.form}>
      <h2 className={styles.header}>{data.header}</h2>
      <label className={styles.label}>{data.name}</label>
      <input
        className={styles.input}
        name="fullname"
        type="text"
        placeholder={data.ph_name}
        required
      />
      <label className={styles.label}>{data.email}</label>
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder={data.ph_email}
        required
      />
      <label className={styles.label}>{data.phone}</label>
      <input
        className={styles.input}
        name="phone"
        type="tel"
        placeholder={data.ph_phone}
        required
      />
      <button id="submit" className={styles.submit} type="submit">
        {data.cta}
      </button>
    </form>
  );
}

export default Form;
