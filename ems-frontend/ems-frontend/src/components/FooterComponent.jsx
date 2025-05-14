import React from 'react'

export default function FooterComponent() {
  return (
    <div>
        <footer className='footer'>
            <span>All rights reserved {new Date().getFullYear()} by John Dev</span>
        </footer>
    </div>
  )
}
