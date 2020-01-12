import React from 'react'

function List({ ...props }) {
  return <ul className="flex list-none my-0 -mx-4 p-0" {...props} />
}

export default List
