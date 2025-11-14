"use client";
import Link from "next/link";

const MultiColumnDropdown = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {data.columns.map((column, index) => (
        <div key={index}>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            {column.title}
          </h4>
          <ul>
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-2">
                <Link
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MultiColumnDropdown;
