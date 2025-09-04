/**
 * Utility function to download a file from a given URL
 * @param url - The URL of the file to download
 * @param filename - The name to save the file as
 */
export const downloadFile = (url: string, filename: string) => {
  // Create a temporary anchor element
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  
  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Utility function to download CV/Resume
 */
export const downloadCV = () => {
  downloadFile('/cv.pdf', 'Aditya_Bisht_Resume.pdf')
}
