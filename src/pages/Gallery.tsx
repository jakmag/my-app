import { useState } from 'react';
import { sculptureList } from '../data/data';

import styles from './GalleryPage.module.css'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { CgDetailsLess } from "react-icons/cg";






const Gallery = () => {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    

    let hasNext = index < sculptureList.length - 1;   
    let hasPrev = index > 0


    const handleNextClick = () => {
        if (hasNext) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
        
    }

    const handlePreviousClick = () => {
        if (hasPrev) {
            setIndex(index - 1)
        } else {
            setIndex(sculptureList.length -1)
        }
        
    }

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    const sculpture = sculptureList[index];

    return (
        <div className={styles.container}>
            
            <div className={styles.row1}>
                <h2>
                    <i>{sculpture.name}</i> by {sculpture.artist}
                </h2>
            
                <button onClick={handleShowMore}>
                    {showMore ? <CgDetailsLess /> : <CgDetailsMore />}
                </button>
            </div>

            {showMore && <p className={styles.row2}> {sculpture.description} </p>}


            <div className={styles.row3}>
                <button 
                    className={styles.nextprevButton}
                    onClick={handlePreviousClick}
                >
                    <MdNavigateBefore />
                </button>

                <img 
                    src={sculpture.url} 
                    alt={sculpture.alt}
                    className={styles.mainImage}
                />

                <button
                    className={styles.nextprevButton}
                    onClick={handleNextClick}
                >
                    <MdNavigateNext />
                </button>

            </div>

            <p className={styles.row4}>
                ({index + 1} of {sculptureList.length})
            </p>




        </div>
    )
}


export default Gallery;