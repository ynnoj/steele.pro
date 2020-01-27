import React from 'react'
import classnames from 'classnames'

function SocialLinks({ className }) {
  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/ynnoj',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/ynnoj',
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com/channel/UC9Ylb1Sg5O1cwR24BZXqrGg',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/ynnoj',
    },
  ]

  return (
    <div className={classnames(className)}>
      <ul className="flex list-none my-0 -mx-4 p-0">
        {socialLinks.map((link, i) => (
          <li className="mx-4" key={i}>
            <a
              className="font-semibold hover:text-gray-900 text-gray-600 text-sm tracking-widest uppercase"
              href={link.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
