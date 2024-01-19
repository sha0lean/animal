//=components/utils/PDFViewer.jsx

import PDFMenus from "@assets/menu/Menu_Animal_2023.pdf"
import { useEffect, useRef, useState } from "react"
import { Document, Page } from "react-pdf"

function PDFViewer() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const containerRef = useRef(null) // Référence pour le conteneur

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.getBoundingClientRect().width
        setScale(containerWidth / 1000) // 600 est une valeur de base pour la largeur du PDF
      }
    }

    window.addEventListener("resize", updateScale)
    updateScale() // Appel initial

    return () => window.removeEventListener("resize", updateScale)
  }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  function goToPreviousPage() {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1))
  }

  function goToNextPage() {
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages))
  }

  return (
    <div
      ref={containerRef}
      id="PDFContainer"
      className="mx-auto w-full overflow-hidden sm:w-3/4 md:w-1/2 lg:w-1/3"
    >
      <Document file={PDFMenus} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          scale={scale}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <div id="PDFNav" className="flex justify-center">
        <button onClick={goToPreviousPage}>Page Précédente</button>
        <span>
          Page {pageNumber} sur {numPages}
        </span>
        <button onClick={goToNextPage}>Page Suivante</button>
      </div>
    </div>
  )
}

export default PDFViewer
