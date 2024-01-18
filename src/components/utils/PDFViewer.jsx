//=components/utils/PDFViewer.jsx

import PDFMenus from "@assets/menu/Menu_Animal_2023.pdf"
import { useEffect, useState } from "react"
import { Document, Page } from "react-pdf"

function PDFViewer() {
  // Utilise useState pour gérer le nombre de pages et la page actuelle
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  // Utiliser une Hauteur Dynamique Basée sur la Fenêtre
  const [pageHeight, setPageHeight] = useState(window.innerHeight)

  useEffect(() => {
    function handleResize() {
      setPageHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Fonction appelée lorsque le document PDF est chargé avec succès
  function onDocumentLoadSuccess({ numPages }) {
    // Met à jour le nombre total de pages du document
    setNumPages(numPages)
  }

  // Fonction pour naviguer à la page précédente
  function goToPreviousPage() {
    // Met à jour pageNumber pour ne pas aller en dessous de 1
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1))
  }

  // Fonction pour naviguer à la page suivante
  function goToNextPage() {
    // Met à jour pageNumber pour ne pas dépasser numPages
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages))
  }

  // Rendu du composant
  return (
    <div className="b1 h-screen w-full overflow-auto bg-primary">
      {/* Affiche le document PDF */}
      <Document file={PDFMenus} onLoadSuccess={onDocumentLoadSuccess}>
        {/* Affiche la page actuelle du document */}
        <Page pageNumber={pageNumber} height={pageHeight} />
      </Document>
      {/* Conteneur pour les boutons de navigation et l'indicateur de page */}
      <div className="b2 my-4 flex justify-center">
        {/* Bouton pour aller à la page précédente */}
        <button onClick={goToPreviousPage}>Page Précédente</button>
        {/* Affiche la page actuelle et le nombre total de pages */}
        <span>
          Page {pageNumber} sur {numPages}
        </span>
        {/* Bouton pour aller à la page suivante */}
        <button onClick={goToNextPage}>Page Suivante</button>
      </div>
    </div>
  )
}

// Exporte le composant pour une utilisation dans d'autres parties de l'application
export default PDFViewer
