import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const RoundCarousel = ({
  list,
  width = 500,
  timer = 2000,
  color = []
}) => {
  const [showWord, setShowWord] = useState(list[11])
  const [number, setNumber] = useState(0)
  let selectedWidth = width

  let slide
  useEffect(() => {
    if (number !== 100) {
      slide = setTimeout(() => {
        setShowWord(list[number])
        if (number === 0 || number <= 10) {
          setNumber(number + 1)
        } else {
          setNumber(0)
        }
      }, timer)
    }
  }, [number])

  let whatColor = (x, i) => {
    if (showWord.title === x.title && i == 0) {
      return color.length > 0 ? color[0] : '#6ee9fa'
    } else if (showWord.title === x.title && i == 1) {
      return color.length > 0 ? color[1] : '#14deff'
    } else if (showWord.title === x.title && i == 2) {
      return color.length > 0 ? color[2] : '#00d2ff'
    } else if (showWord.title === x.title && i == 3) {
      return color.length > 0 ? color[3] : '#00c5ff'
    } else if (showWord.title === x.title && i == 4) {
      return color.length > 0 ? color[4] : '#00b8ff'
    } else if (showWord.title === x.title && i == 5) {
      return color.length > 0 ? color[5] : '#00aaff'
    } else if (showWord.title === x.title && i == 6) {
      return color.length > 0 ? color[6] : '#009aff'
    } else if (showWord.title === x.title && i == 7) {
      return color.length > 0 ? color[7] : '#0089ff'
    } else if (showWord.title === x.title && i == 8) {
      return color.length > 0 ? color[8] : '#0077ff'
    } else if (showWord.title === x.title && i == 9) {
      return color.length > 0 ? color[9] : '#0061ff'
    } else if (showWord.title === x.title && i == 10) {
      return color.length > 0 ? color[10] : '#0045ff'
    } else if (showWord.title === x.title && i == 11) {
      return color.length > 0 ? color[11] : '#480df9'
    } else {
      return null
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftcontainer}>
        <ul
          className={styles.circle}
          style={{
            position: 'relative',
            width: `${selectedWidth}px`,
            height: `${selectedWidth}px`,
            margin: '0 auto'
          }}
        >
          {list.map((x, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setShowWord(list[i])
                  setNumber(100)
                  clearTimeout(slide)
                }}
              >
                <div
                  className={
                    showWord.title === x.title ? styles.text : styles.activeText
                  }
                  style={{ backgroundColor: whatColor(x, i) }}
                >
                  {i}
                </div>
              </li>
            )
          })}
          <img
            style={{
              position: 'absolute',
              top: '17%',
              left: '17%',
              borderRadius: '100%',
              width: `${selectedWidth - selectedWidth / 3}px`,
              height: `${selectedWidth - selectedWidth / 3}px`,
              zIndex: -1
            }}
            src={showWord.image}
            className={styles.image}
          />
        </ul>
      </div>
      <div className={styles.rightcontainer}>
        <p style={{ fontSize: '50px', textAlign: 'center' }}>
          {showWord.title}
        </p>
        <p style={{ fontSize: '20px' }}>{showWord.text}</p>
      </div>
    </div>
  )
}
