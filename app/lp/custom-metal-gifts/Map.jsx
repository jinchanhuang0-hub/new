'use client';
import { useState } from 'react';
import styles from './page.module.css';
export default function Map() {
  const [loaded, setLoaded] = useState(false);
  return <div className={styles.mapCard}><div className={styles.mapPanel}>{loaded ? <iframe title="Unique Pin location" src="https://www.google.com/maps?q=Building%20A%2C%201st%20Floor%2C%20No.%207%20Xingyu%20Road%2C%20Xiaolan%20Town%2C%20Zhongshan%20City%2C%20Guangdong%2C%20China&hl=en&region=US&output=embed" loading="lazy" /> : <><strong>View our location</strong><p>Google Maps loads only after you choose to open it. Google will receive technical information such as your IP address.</p><button className={styles.button} type="button" onClick={() => setLoaded(true)}>Load Google Map</button></>}</div><p><strong>Add:</strong> Building A, 1st Floor, No. 7 Xingyu Road, Xiaolan Town, Zhongshan City, Guangdong, China</p></div>;
}
