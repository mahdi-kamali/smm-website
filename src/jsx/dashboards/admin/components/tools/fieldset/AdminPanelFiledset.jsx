import React from 'react'

export default function AdminPanelFiledset({ children, className }) {
  return (
    <fieldset className={`admin-dashboard-field-box ${className}`}>
      {children}
    </fieldset>
  )
}
