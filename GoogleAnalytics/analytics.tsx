import React from 'react'

function Analytics() {
  return (
    // <!-- Google tag (gtag.js) -->
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SJ7KFFC3YX"></script>
      <script>
        {
          `
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-SJ7KFFC3YX');
        `
        }

      </script>
    </>
  )
}


export default Analytics