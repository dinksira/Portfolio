'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// SVG Icons as React components
const MagicWandIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2 8.6 4.5 10 7 7.5 5.6zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14l-2.5 1.4zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5L22 2zM10.2 10.2L3 17.4 6.6 21l7.2-7.2-3.6-3.6z"/>
  </svg>
);

const VisionIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zM12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/>
  </svg>
);

const CraftIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
  </svg>
);

const StrategyIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.78-1.18 2.73-3.12 3.16z"/>
  </svg>
);

const SparkleIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C7.97 19.54 9.43 20 11 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97-.25 2.8-.7l1.46-1.46C16.03 4.46 14.57 4 13 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
  </svg>
);

// Official SVG Icons for Digital Playground
const FigmaIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 200 300" fill="currentColor">
    <path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
    <path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
    <path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
    <path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
    <path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
  </svg>
);

const ReactIcon = ({ className = "" }) => (
  <svg className={className} viewBox="-11.5 -10.232 23 20.463" fill="currentColor">
    <circle r="2.05" fill="currentColor"/>
    <g stroke="currentColor" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const FramerIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 16 24" fill="currentColor">
    <path d="M0 0H16L8 12H0V0Z"/>
    <path d="M8 12H16L0 24V12H8Z"/>
  </svg>
);

const TypeScriptIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 128 128" fill="currentColor">
    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
    <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"/>
  </svg>
);

const ThreeJsIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 259" fill="currentColor">
    <path d="M.087 3.585C-.446 1.427 1.555-.5 3.691.116l62.23 17.916a2.94 2.94 0 0 1 1.578.455l122.73 35.334c.508.01 1.01.155 1.446.416l62.234 17.918c2.138.616 2.807 3.316 1.203 4.858l-187.8 180.649c-1.603 1.542-4.274.77-4.807-1.39L31.353 130.16a2.948 2.948 0 0 1-.098-.396Zm53.306 191.71l13.52 54.733l40.714-39.165l-54.234-15.568Zm41.938-43.284l-39.419 37.995l52.512 15.076l-13.093-53.071Zm5.851-.406l13.052 52.903l39.311-37.814l-52.363-15.089Zm-63.07-18.174l13.109 53.073l39.372-37.95l-52.481-15.123Zm103.704-26.278l-40.051 38.606l53.373 15.38l-13.322-53.986Zm5.612-1.373l13.322 53.984l40.161-38.631l-53.483-15.353ZM79.847 89.239l-40.137 38.64l53.471 15.407l-13.334-54.047Zm5.59-1.457l13.094 53.07l39.419-37.996l-52.512-15.074ZM22.385 69.759L35.71 123.71l40.108-38.612l-53.434-15.339Zm166.192-7.49l-39.419 37.995l52.512 15.076l-13.093-53.071Zm5.633-1.29l13.28 53.826l40.008-38.484l-53.288-15.342Zm-67.86-16.506L87.109 82.25l52.265 15.003l-13.023-52.78Zm5.601-1.419l13.112 53.134l39.43-38.007l-52.542-15.127ZM64.338 26.48L24.919 64.476L77.431 79.55L64.338 26.48Zm5.638-1.269l13.061 52.937l39.323-37.855l-52.384-15.082ZM6.894 7.05l13.323 53.935l40.022-38.577L6.894 7.05Z"/>
  </svg>
);

const TailwindIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor">
    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
  </svg>
);

const NextJsIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
  </svg>
);

const AdobeXdIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 250" fill="currentColor">
    <rect width="256" height="249.6" fill="#470137" rx="42.5"/>
    <path fill="#FF61F6" d="m134.578 65.64l-31.943 52.723l34.175 55.985c.22.392.281.852.172 1.288c-.053.186-.167.232-.342.239l-.194-.003l-.236-.006c-.128 0-.271.006-.43.032h-24.64l-.484-.008c-1.328-.035-2.285-.225-2.868-1.199a3291.718 3291.718 0 0 0-6.87-13.309a469.933 469.933 0 0 0-6.34-11.767l-.958-1.714a782.954 782.954 0 0 1-7.642-13.91h-.172a532.443 532.443 0 0 1-7.127 13.738c-2.463 4.58-4.896 9.132-7.299 13.653a607.72 607.72 0 0 1-7.384 13.481c-.405.91-1.078 1.1-2.015 1.131l-.39.006H38.064l-.102.003l-.336.03c-.187.011-.299-.029-.335-.311a1.725 1.725 0 0 1 .258-1.202l33.144-54.44l-32.286-54.61c-.343-.456-.4-.828-.172-1.116a1.25 1.25 0 0 1 1.031-.43H63.48a3.59 3.59 0 0 1 1.546.258c.41.233.763.556 1.03.945c2.061 4.58 4.351 9.16 6.87 13.738a736.524 736.524 0 0 0 7.642 13.567a191.963 191.963 0 0 1 7.127 13.567h.172a506.673 506.673 0 0 1 6.955-13.738c2.345-4.465 4.75-8.96 7.212-13.482a620.843 620.843 0 0 0 7.127-13.48c.132-.424.368-.808.687-1.117a2.503 2.503 0 0 1 1.374-.258h22.497a.984.984 0 0 1 .95 1.634l-.09.084Zm50.47 112.473l-1.184.013a53.208 53.208 0 0 1-22.927-4.808a36.45 36.45 0 0 1-16.057-14.512c-3.791-6.296-5.737-14.142-5.835-23.535l-.004-.765a44.844 44.844 0 0 1 5.84-22.497a42.866 42.866 0 0 1 16.412-16.166l.589-.32c7.44-4.122 16.428-6.183 26.962-6.183l.46.005l.526.017l.59.026l.656.038l1.102.078l1.248.1l.913.08V55.852c0-.8.344-1.202 1.03-1.202h21.639a.91.91 0 0 1 1.03 1.03v101.495c0 1.704.066 3.54.198 5.504l.32 4.455l.170 2.577a1.775 1.775 0 0 1-1.031 1.718a85.184 85.184 0 0 1-17.345 5.151a93.12 93.12 0 0 1-15.302 1.533Zm9.291-21.282v-46.883a17.035 17.035 0 0 0-2.833-.515a34.25 34.25 0 0 0-3.521-.172a26.52 26.52 0 0 0-12.021 2.748a23.472 23.472 0 0 0-9.016 7.9c-2.267 3.316-3.44 7.646-3.517 12.99l-.004.577a30.284 30.284 0 0 0 1.803 10.99a20.894 20.894 0 0 0 4.81 7.557a18.311 18.311 0 0 0 7.212 4.293a28.277 28.277 0 0 0 8.844 1.375c1.602 0 3.09-.058 4.465-.173a18.38 18.38 0 0 0 3.248-.54l.53-.147Z"/>
  </svg>
);

const BlenderIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 208" fill="currentColor">
    <path fill="#FFF" d="M100.43 115.195c.931-16.606 9.062-31.235 21.33-41.606c12.03-10.186 28.222-16.412 45.89-16.412c17.65 0 33.843 6.226 45.882 16.412c12.258 10.37 20.39 25 21.33 41.588c.93 17.062-5.928 32.912-17.958 44.661c-12.267 11.951-29.716 19.45-49.254 19.45c-19.538 0-37.021-7.499-49.28-19.45c-12.039-11.75-18.88-27.6-17.94-44.643Z"/>
    <path fill="#265787" d="M133.168 116.676c.477-8.52 4.65-16.027 10.944-21.348c6.173-5.226 14.481-8.421 23.547-8.421c9.056 0 17.365 3.195 23.542 8.421c6.29 5.321 10.462 12.828 10.944 21.34c.478 8.754-3.04 16.887-9.214 22.915c-6.294 6.132-15.247 9.98-25.272 9.98c-10.025 0-18.996-3.848-25.286-9.98c-6.177-6.028-9.687-14.161-9.205-22.907Z"/>
    <path fill="#EA7600" d="M78.41 134.18c.06 3.34 1.125 9.834 2.724 14.904c3.359 10.733 9.057 20.663 16.986 29.413c8.137 8.995 18.156 16.22 29.73 21.349c12.164 5.387 25.344 8.132 39.034 8.11c13.668-.019 26.849-2.818 39.013-8.246c11.573-5.179 21.583-12.435 29.707-21.434c7.924-8.787 13.613-18.734 16.982-29.467c1.693-5.423 2.763-10.927 3.192-16.45a74.978 74.978 0 0 0-.528-16.336c-1.508-10.611-5.18-20.567-10.833-29.643c-5.17-8.34-11.834-15.641-19.759-21.787l.018-.013l-79.97-61.405c-.073-.054-.132-.112-.209-.162c-5.246-4.028-14.07-4.014-19.84.022c-5.834 4.082-6.502 10.833-1.31 15.09l-.022.023l33.355 27.124l-101.663.108h-.136c-8.403.01-16.48 5.523-18.08 12.49c-1.643 7.098 4.065 12.986 12.802 13.018l-.014.031l51.53-.1L9.167 141.4c-.117.086-.244.176-.352.262c-8.674 6.642-11.478 17.687-6.015 24.676c5.545 7.108 17.335 7.121 26.099.041l50.184-41.071s-.732 5.544-.673 8.872Zm128.955 18.566c-10.34 10.535-24.817 16.508-40.48 16.54c-15.687.027-30.163-5.893-40.503-16.409c-5.053-5.125-8.764-11.022-11.054-17.303a44.932 44.932 0 0 1-2.537-19.334c.546-6.462 2.47-12.625 5.54-18.202c3.016-5.481 7.17-10.435 12.3-14.625c10.05-8.19 22.847-12.625 36.23-12.643c13.398-.018 26.185 4.376 36.246 12.54c5.12 4.171 9.27 9.107 12.286 14.58a45.673 45.673 0 0 1 5.563 18.192a45.04 45.04 0 0 1-2.547 19.32c-2.294 6.3-5.992 12.197-11.044 17.344Z"/>
  </svg>
);

const NodeJsIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 898 1024" fill="currentColor">
    <path fill="#000000" d="m321 448l128-64l128 64v128l-128 64l-128-64V448zm552 3L683 576q-20 0-31-13t-11-32V400L449 288L258 400v224l443 259l-192 127q-25 14-60.5 14t-60.5-14L26 771q-28-16-25-39V292q-3-23 25-38L388 14q25-14 60.5-14T509 14l363 240q25 14 24 34h1v124q4 23-24 39z"/>
  </svg>
);

const PhotoshopIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" fill="currentColor">
    <g fill="none">
      <rect width="256" height="256" fill="#001E36" rx="60"/>
      <path fill="#31A8FF" d="M57.6 178.04V68.28c0-.747.32-1.173 1.067-1.173c1.813 0 3.52 0 5.973-.107c2.56-.107 5.227-.107 8.107-.213c2.88-.107 5.973-.107 9.28-.214c3.306-.106 6.506-.106 9.706-.106c8.747 0 16 1.066 21.974 3.306A38.09 38.09 0 0 1 128 78.52a33.972 33.972 0 0 1 7.787 12.16c1.6 4.48 2.453 9.067 2.453 13.867c0 9.173-2.133 16.746-6.4 22.72c-4.267 5.973-10.24 10.453-17.173 13.013c-7.254 2.667-15.254 3.627-24 3.627c-2.56 0-4.267 0-5.334-.107c-1.066-.107-2.56-.107-4.586-.107v34.24c.106.747-.427 1.387-1.174 1.494H58.88c-.853 0-1.28-.427-1.28-1.387Zm23.253-90.347v35.84c1.494.107 2.88.214 4.16.214h5.654c4.16 0 8.32-.64 12.266-1.92c3.414-.96 6.4-2.987 8.747-5.654c2.24-2.666 3.307-6.293 3.307-10.986a17.56 17.56 0 0 0-2.454-9.494c-1.813-2.773-4.373-4.906-7.466-6.08c-3.947-1.6-8.214-2.24-12.587-2.133c-2.773 0-5.227 0-7.253.107c-2.134-.107-3.627 0-4.374.106ZM204.8 117.027c-3.2-1.707-6.613-2.88-10.24-3.627c-3.947-.853-7.893-1.387-11.947-1.387c-2.133-.106-4.373.214-6.4.747c-1.386.32-2.56 1.067-3.306 2.133c-.534.854-.854 1.92-.854 2.88s.427 1.92 1.067 2.774c.96 1.173 2.24 2.133 3.627 2.88a97.616 97.616 0 0 0 7.573 3.52c5.76 1.92 11.307 4.586 16.427 7.786c3.52 2.24 6.4 5.227 8.426 8.854c1.707 3.413 2.56 7.146 2.454 10.986c.106 5.014-1.387 10.027-4.16 14.187a26.73 26.73 0 0 1-11.947 9.493c-5.227 2.24-11.627 3.414-19.307 3.414c-4.906 0-9.706-.427-14.506-1.387a43.014 43.014 0 0 1-10.88-3.413c-.747-.427-1.28-1.174-1.174-2.027v-18.56c0-.32.107-.747.427-.96c.32-.213.64-.107.96.107c4.16 2.453 8.533 4.16 13.227 5.226c4.053 1.067 8.32 1.6 12.586 1.6c4.054 0 6.934-.533 8.854-1.493c1.706-.747 2.88-2.56 2.88-4.48c0-1.493-.854-2.88-2.56-4.267c-1.707-1.386-5.227-2.986-10.454-5.013a65.252 65.252 0 0 1-15.146-7.68a27.621 27.621 0 0 1-8.107-9.067c-1.707-3.413-2.56-7.146-2.453-10.88c0-4.586 1.28-8.96 3.626-12.906c2.667-4.267 6.614-7.68 11.2-9.814c5.014-2.56 11.307-3.733 18.88-3.733c4.374 0 8.854.32 13.227.96c3.2.427 6.293 1.28 9.173 2.453c.427.107.854.534 1.067.96c.107.427.213.854.213 1.28v17.387c0 .427-.213.853-.533 1.067c-.96.213-1.493.213-1.92 0Z"/>
    </g>
  </svg>
);

const IllustratorIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" fill="currentColor">
    <g fill="none">
      <rect width="256" height="256" fill="#300" rx="60"/>
      <path fill="#FF9A00" d="M123.733 152.333h-39.68L75.946 177.4c-.213.96-1.066 1.6-2.026 1.493H53.866c-1.173 0-1.493-.64-1.173-1.92l34.347-98.88c.32-1.066.64-2.24 1.066-3.52c.427-2.24.64-4.586.64-6.933c-.106-.533.32-1.067.854-1.173h27.626c.854 0 1.28.32 1.387.853l38.933 109.867c.32 1.173 0 1.706-1.066 1.706h-22.294c-.746.107-1.493-.426-1.706-1.173l-8.747-25.387ZM90.24 130.68h27.093c-.64-2.24-1.493-4.907-2.453-7.68c-.96-2.88-1.92-5.973-2.88-9.173c-1.067-3.307-2.027-6.507-3.094-9.814c-1.066-3.306-2.026-6.4-2.88-9.493c-.853-2.986-1.6-5.76-2.346-8.32h-.214c-.96 4.587-2.133 9.174-3.626 13.76c-1.6 5.12-3.2 10.453-4.907 15.787a209.317 209.317 0 0 1-4.693 14.933Zm91.093-45.547c-3.52.107-6.933-1.28-9.493-3.733c-2.453-2.667-3.733-6.187-3.627-9.813c-.106-3.627 1.28-7.04 3.84-9.494c2.56-2.453 5.974-3.733 9.494-3.733c4.16 0 7.36 1.28 9.706 3.733a13.464 13.464 0 0 1 3.52 9.494c.107 3.626-1.173 7.146-3.733 9.813c-2.453 2.56-6.08 3.947-9.707 3.733Zm-11.946 92.587V95.587c0-1.067.426-1.494 1.386-1.494h21.12c.96 0 1.387.534 1.387 1.494v82.133c0 1.173-.427 1.707-1.387 1.707h-20.906c-1.067 0-1.6-.64-1.6-1.707Z"/>
    </g>
  </svg>
);

const AfterEffectsIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" fill="currentColor">
    <g fill="none">
      <rect width="256" height="256" fill="#00005B" rx="60"/>
      <path fill="#99F" d="M105.157 156.12h-39.68l-8.107 25.173c-.213.96-1.066 1.6-2.026 1.494H35.29c-1.173 0-1.493-.64-1.173-1.92l34.346-98.454c.32-1.066.64-2.026 1.067-3.306c.427-2.24.64-4.587.64-6.934c-.106-.533.32-1.066.853-1.173H98.65c.747 0 1.28.32 1.387.853l38.933 108.8c.32 1.174 0 1.707-1.066 1.707H115.61c-.746.107-1.493-.427-1.706-1.173l-8.747-25.6v.533Zm-33.493-21.227h27.093c-.64-2.24-1.494-4.906-2.454-7.68c-.96-2.88-1.92-5.973-2.88-9.173c-1.066-3.307-2.026-6.507-3.093-9.813c-1.067-3.307-2.026-6.4-2.88-9.494c-.853-2.986-1.6-5.76-2.347-8.32h-.213c-.96 4.587-2.133 9.174-3.627 13.76c-1.6 5.12-3.2 10.454-4.906 15.787c-1.387 5.44-3.094 10.453-4.694 14.933Zm130.133 11.627h-33.813c.426 3.307 1.493 6.613 3.306 9.493c1.92 2.88 4.587 5.12 7.787 6.4c4.267 1.814 8.96 2.774 13.653 2.667c3.734-.107 7.467-.427 11.094-1.173a40.052 40.052 0 0 0 9.493-2.454c.533-.426.853-.213.853.854v16.32c0 .426-.106.853-.213 1.28c-.213.32-.427.533-.747.746a45.596 45.596 0 0 1-10.666 3.2a72.042 72.042 0 0 1-15.147 1.28c-8.107 0-14.933-1.28-20.48-3.733c-5.227-2.24-9.813-5.76-13.44-10.133a39.145 39.145 0 0 1-7.36-13.974c-1.493-5.013-2.24-10.24-2.24-15.573c0-5.76.853-11.413 2.667-16.96a43.511 43.511 0 0 1 8-14.613c3.52-4.267 7.893-7.68 12.906-10.134c5.014-2.453 10.987-3.306 17.814-3.306c5.653-.107 11.306.96 16.533 3.306c4.373 1.92 8.213 4.8 11.2 8.534c2.773 3.626 5.013 7.68 6.4 12.16c1.387 4.266 2.027 8.64 2.027 13.013c0 2.56-.107 4.8-.214 6.827c-.213 2.026-.32 3.52-.426 4.48c-.107.746-.747 1.386-1.494 1.386c-.64 0-1.813.107-3.52.214c-1.706.213-3.733.32-6.186.32c-2.454 0-5.014-.427-7.787-.427Zm-33.813-15.573h22.506c2.774 0 4.8 0 6.08-.107c.854-.107 1.707-.32 2.454-.853v-1.067a12.26 12.26 0 0 0-.64-3.947c-1.92-5.973-7.574-10.026-13.867-9.813a15.02 15.02 0 0 0-14.187 8.107c-1.28 2.453-2.026 5.013-2.346 7.68Z"/>
    </g>
  </svg>
);

const VSCodeIcon = ({ className = "" }) => (
  <svg className={className} width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path fill="#2196f3" d="M11.5 11.19V4.8L7.3 7.99M1.17 6.07a.6.6 0 0 1-.01-.81L2 4.48c.14-.13.48-.18.73 0l2.39 1.83l5.55-5.09c.22-.22.61-.32 1.05-.08l2.8 1.34c.25.15.49.38.49.81v9.49c0 .28-.2.58-.42.7l-3.08 1.48c-.22.09-.64 0-.79-.14L5.11 9.69l-2.38 1.83c-.27.18-.6.13-.74 0l-.84-.77c-.22-.23-.2-.61.04-.84l2.1-1.9"/>
  </svg>
);

const GitIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 128 128" fill="currentColor">
    <path fill="#F03C2E" d="M124.737 58.378L69.621 3.264C67.22.863 63.614.863 61.213 3.264L46.257 18.22l15.749 15.749c3.487-1.171 7.477-.401 10.259 2.381 2.783 2.782 3.552 6.772 2.381 10.259l15.2 15.2c3.487-1.171 7.477-.401 10.259 2.381 3.93 3.93 3.93 10.304 0 14.234-3.93 3.93-10.304 3.93-14.234 0-2.782-2.782-3.552-6.772-2.381-10.259l-14.228-14.228v37.531c.922.457 1.791 1.064 2.569 1.842 3.93 3.93 3.93 10.304 0 14.234-3.93 3.93-10.304 3.93-14.234 0-3.93-3.93-3.93-10.304 0-14.234.778-.778 1.647-1.385 2.569-1.842V53.708c-.922-.457-1.791-1.064-2.569-1.842-2.782-2.782-3.552-6.772-2.381-10.259L42.642 26.407 3.264 61.213c-2.401 2.401-2.401 6.007 0 8.408l55.116 55.114c2.401 2.401 6.007 2.401 8.408 0l55.949-55.949c2.401-2.401 2.401-6.007 0-8.408z"/>
  </svg>
);

const MongoDBIcon = ({ className = "" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 128 128" fill="currentColor">
    <path fill="#439934" fillRule="evenodd" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296c.472 6.095.256 12.147-1.029 18.142c-.035.165-.109.32-.164.48c-.403.001-.814-.049-1.208.012c-3.329.523-6.655 1.065-9.981 1.604c-3.438.557-6.881 1.092-10.313 1.687c-1.216.21-2.721-.041-3.212 1.641c-.014.046-.154.054-.235.08l.166-10.051l-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281c3.129-.497 6.261-.98 9.392-1.465c1.381-.215 2.764-.412 4.148-.618z" clipRule="evenodd"/>
    <path fill="#45A538" fillRule="evenodd" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37c-8.717-8.222-15.093-17.899-18.233-29.566c-.865-3.211-1.442-6.474-1.627-9.792c-.13-2.322-.318-4.665-.154-6.975c.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702c1.759 5.18 3.505 10.364 5.242 15.551c5.458 16.3 10.909 32.604 16.376 48.9c.107.318.384.579.583.866l-.87 2.969z" clipRule="evenodd"/>
    <path fill="#46A037" fillRule="evenodd" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616c-3.131.485-6.263.968-9.392 1.465c-2.622.417-5.242.852-7.862 1.281l-1.602.275l-.012-1.045c-.053-.859-.144-1.717-.154-2.576c-.069-5.478-.112-10.956-.18-16.434c-.042-3.429-.105-6.857-.175-10.285c-.043-2.13-.089-4.261-.185-6.388c-.052-1.143-.236-2.28-.311-3.423c-.042-.657.016-1.319.029-1.979c.817 1.583 1.616 3.178 2.456 4.749c1.327 2.484 3.441 4.314 5.344 6.311c7.523 7.892 12.864 17.068 16.193 27.433z" clipRule="evenodd"/>
    <path fill="#409433" fillRule="evenodd" d="M65.036 80.753c.081-.026.222-.034.235-.08c.491-1.682 1.996-1.431 3.212-1.641c3.432-.594 6.875-1.13 10.313-1.687c3.326-.539 6.652-1.081 9.981-1.604c.394-.062.805-.011 1.208-.012c-.622 2.22-1.112 4.488-1.901 6.647c-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 0 1-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548c-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23l-1.214-1.038l-1.256-2.753a41.402 41.402 0 0 1-1.394-9.838l.023-.561l.171-2.426c.057-.828.133-1.655.168-2.485c.129-2.982.241-5.964.359-8.946z" clipRule="evenodd"/>
    <path fill="#4FAA41" fillRule="evenodd" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947c-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913c-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 0 0-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 0 1 6.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198c.116.349.308.671.491 1.062l.67-.78l-.167 10.052z" clipRule="evenodd"/>
    <path fill="#4AA73C" fillRule="evenodd" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 0 1 6.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642c1.662 4.961 3.362 9.911 5.062 14.913l.765-.289l-.171 2.426l-.155.559c-.266 2.656-.49 5.318-.814 7.968c-.163 1.328-.509 2.632-.772 3.947c-.198-.287-.476-.548-.583-.866c-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 0 0-5.242-15.551c-.89-.263-.34-.469-.516-.702l3.272-8.84z" clipRule="evenodd"/>
    <path fill="#57AE47" fillRule="evenodd" d="m65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062c-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 0 0-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769c1.681 4.921 3.347 9.848 5.003 14.778c1.547 4.604 3.071 9.215 4.636 13.813c.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z" clipRule="evenodd"/>
    <path fill="#60B24F" fillRule="evenodd" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786c-1.565-4.598-3.089-9.209-4.636-13.813c-1.656-4.93-3.322-9.856-5.003-14.778c-.099-.287-.371-.514-.562-.769c1.969-1.928 3.877-3.925 5.925-5.764c1.821-1.634 3.285-3.386 3.352-5.968c.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979c.075 1.143.259 2.28.311 3.423c.096 2.127.142 4.258.185 6.388c.069 3.428.132 6.856.175 10.285c.067 5.478.111 10.956.18 16.434c.008.861.098 1.718.152 2.577z" clipRule="evenodd"/>
    <path fill="#A9AA88" fillRule="evenodd" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947c.325-2.649.548-5.312.814-7.968l.066-.01l.066.011a41.402 41.402 0 0 0 1.394 9.838c-.176.232-.425.439-.518.701c-.727 2.05-1.412 4.116-2.143 6.166c-.1.28-.378.498-.574.744l-.747-2.566l.87-2.969z" clipRule="evenodd"/>
    <path fill="#B6B598" fillRule="evenodd" d="M62.476 112.621c.196-.246.475-.464.574-.744c.731-2.05 1.417-4.115 2.143-6.166c.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z" clipRule="evenodd"/>
    <path fill="#C2C1A7" fillRule="evenodd" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624c-.839 2.403-1.64 4.819-2.485 7.222c-.107.305-.404.544-.614.812c-.109-1.387-.22-2.771-.331-4.158z" clipRule="evenodd"/>
    <path fill="#CECDB7" fillRule="evenodd" d="M63.503 120.763c.209-.269.506-.508.614-.812c.845-2.402 1.646-4.818 2.485-7.222c.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477c-.575 1.614-1.117 3.24-1.694 4.854c-.119.333-.347.627-.525.938c-.158-.207-.441-.407-.454-.623c-.051-.841-.016-1.688-.013-2.533z" clipRule="evenodd"/>
    <path fill="#DBDAC7" fillRule="evenodd" d="M63.969 123.919c.178-.312.406-.606.525-.938c.578-1.613 1.119-3.239 1.694-4.854c.065-.183.263-.319.398-.477l.012 3.64l-1.218 3.124l-1.411-.495z" clipRule="evenodd"/>
    <path fill="#EBE9DC" fillRule="evenodd" d="m65.38 124.415l1.218-3.124l.251 3.696l-1.469-.572z" clipRule="evenodd"/>
    <path fill="#CECDB7" fillRule="evenodd" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23l-1.054 1.867z" clipRule="evenodd"/>
    <path fill="#4FAA41" fillRule="evenodd" d="m64.316 95.172l-.066-.011l-.066.01l.155-.559l-.023.56z" clipRule="evenodd"/>
  </svg>
);

// Creative skill data structure
const skillClusters = [
  {
    category: "Creative Vision",
    icon: VisionIcon,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "UI Design", level: 95, description: "Crafting beautiful interfaces" },
      { name: "UX Research", level: 88, description: "Understanding user needs" },
      { name: "Design Systems", level: 92, description: "Creating scalable solutions" },
      { name: "Visual Storytelling", level: 85, description: "Narrating through design" }
    ]
  },
  {
    category: "Digital Craft",
    icon: CraftIcon,
    color: "from-blue-400 to-cyan-500",
    skills: [
      { name: "React Ecosystem", level: 90, description: "Modern frontend magic" },
      { name: "Animation Design", level: 87, description: "Breathing life into UI" },
      { name: "Responsive Design", level: 94, description: "Perfect on every device" },
      { name: "Performance", level: 89, description: "Lightning fast experiences" }
    ]
  },
  {
    category: "Strategic Mind",
    icon: StrategyIcon,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Product Strategy", level: 86, description: "From idea to impact" },
      { name: "User Psychology", level: 91, description: "Understanding behavior" },
      { name: "Data-Driven Design", level: 84, description: "Decisions backed by data" },
      { name: "Design Thinking", level: 93, description: "Human-centered approach" }
    ]
  }
];

// Tools with their official SVG icon components
const creativeTools = [
  { name: "Figma", icon: FigmaIcon, category: "Design", color: "hover:shadow-purple-500/20" },
  { name: "React", icon: ReactIcon, category: "Frontend", color: "hover:shadow-cyan-500/20" },
  { name: "Framer Motion", icon: FramerIcon, category: "Animation", color: "hover:shadow-blue-500/20" },
  { name: "TypeScript", icon: TypeScriptIcon, category: "Development", color: "hover:shadow-blue-600/20" },
  { name: "Three.js", icon: ThreeJsIcon, category: "3D", color: "hover:shadow-black/20" },
  { name: "Tailwind", icon: TailwindIcon, category: "Styling", color: "hover:shadow-cyan-500/20" },
  { name: "Next.js", icon: NextJsIcon, category: "Fullstack", color: "hover:shadow-white/20" },
  { name: "Adobe XD", icon: AdobeXdIcon, category: "Design", color: "hover:shadow-purple-500/20" },
  { name: "Blender", icon: BlenderIcon, category: "3D", color: "hover:shadow-orange-500/20" },
  { name: "Node.js", icon: NodeJsIcon, category: "Backend", color: "hover:shadow-green-600/20" },
  { name: "Photoshop", icon: PhotoshopIcon, category: "Creative", color: "hover:shadow-blue-600/20" },
  { name: "Illustrator", icon: IllustratorIcon, category: "Creative", color: "hover:shadow-orange-400/20" },
  { name: "After Effects", icon: AfterEffectsIcon, category: "Motion", color: "hover:shadow-purple-600/20" },
  { name: "VS Code", icon: VSCodeIcon, category: "Development", color: "hover:shadow-blue-600/20" },
  { name: "Git", icon: GitIcon, category: "Version Control", color: "hover:shadow-orange-500/20" },
  { name: "MongoDB", icon: MongoDBIcon, category: "Database", color: "hover:shadow-green-500/20" }
];

export default function SkillsCloud() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCluster, setActiveCluster] = useState(0);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-ethiopian-green/10 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-sunset-gold/10 to-transparent rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-20 h-20 mx-auto mb-6 text-ethiopian-green"
          >
            <MagicWandIcon className="w-full h-full" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-ethiopian-green via-sunset-gold to-axum-purple bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-neutral-900 dark:text-white">Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light"
          >
            Where design intuition meets technical precision. 
            <span className="block mt-2 text-ethiopian-green font-medium">Crafting experiences that feel like magic</span>
          </motion.p>
        </motion.div>

        {/* Interactive Skill Clusters with SVG Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillClusters.map((cluster, clusterIndex) => {
            const IconComponent = cluster.icon;
            return (
              <motion.div
                key={cluster.category}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.6 + clusterIndex * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setActiveCluster(clusterIndex)}
                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                  activeCluster === clusterIndex 
                    ? 'bg-white dark:bg-neutral-800 shadow-2xl scale-105' 
                    : 'bg-white/50 dark:bg-neutral-800/50 shadow-lg backdrop-blur-sm'
                }`}
              >
                {/* Cluster Header with SVG Icon */}
                <div className="text-center mb-8">
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${cluster.color} flex items-center justify-center text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8" />
                  </motion.div>
                  <h3 className={`text-2xl font-bold ${
                    activeCluster === clusterIndex 
                      ? 'text-neutral-900 dark:text-white' 
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}>
                    {cluster.category}
                  </h3>
                </div>

                {/* Skills in Cluster */}
                <div className="space-y-4">
                  {cluster.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + clusterIndex * 0.2 + skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-ethiopian-green transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-lg font-bold text-ethiopian-green bg-ethiopian-green/10 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Creative Progress Bar */}
                      <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: 1 + clusterIndex * 0.2 + skillIndex * 0.1,
                            duration: 1.5,
                            type: "spring",
                            bounce: 0.3
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${cluster.color} relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ 
                              x: ['0%', '100%'],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Digital Playground with Official SVG Tool Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 }}
              className="text-4xl font-display font-black mb-4"
            >
              <span className="bg-gradient-to-r from-sunset-gold to-axum-purple bg-clip-text text-transparent">
                Digital
              </span>
              <span className="text-neutral-900 dark:text-white"> Playground</span>
            </motion.h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg">
              Professional tools that power creativity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {creativeTools.map((tool, index) => {
              const ToolIcon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 1.4 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className={`group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center cursor-pointer border border-transparent hover:border-ethiopian-green/20 ${tool.color}`}
                >
                  <div className="w-12 h-12 mx-auto mb-3 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300">
                    <ToolIcon className="w-full h-full" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {tool.name}
                  </h4>
                  <span className="text-xs text-ethiopian-green bg-ethiopian-green/10 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Creative CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-ethiopian-green to-sunset-gold text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group"
          >
            <span>Let's Create Magic Together</span>
            <motion.div              
              animate={{
                x: [0, 10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white group-hover:text-yellow-200 transition-colors"
            >
              <SparkleIcon className="w-6 h-6" />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="text-neutral-500 dark:text-neutral-400 mt-6 text-sm"
          >
            Ready to bring your vision to life with cutting-edge design and technology
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}