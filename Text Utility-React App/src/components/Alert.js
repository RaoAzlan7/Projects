import React from 'react'

export default function Alert(prop) {
  return (
        prop.alert &&<div className={`alert alert-${prop.alert.type}`} role="alert">
            <strong>{prop.alert.type}</strong>, {prop.alert.message}
        </div>
  );
}

