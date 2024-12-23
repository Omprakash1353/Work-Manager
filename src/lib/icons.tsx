export function SVGIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  // Common classes for all icons to inherit colors from parent
  const commonClasses = "h-full w-full stroke-current fill-current";
  const finalClassName = className
    ? `${commonClasses} ${className}`
    : commonClasses;

  switch (name) {
    case "inbox":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M9.47214 2C7.57828 2 5.84696 3.07001 5 4.76393L2.31672 10.1305C2.10844 10.5471 2 11.0064 2 11.4721V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V11.4721C22 11.0064 21.8916 10.5471 21.6833 10.1305L19 4.76393C18.153 3.07001 16.4217 2 14.5279 2H9.47214Z"
              fill="#4296FF"
            ></path>{" "}
            <path
              d="M5.5 11H2V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V11H18.5C16.567 11 15 12.567 15 14.5C15 15.3284 14.3284 16 13.5 16H10.5C9.67157 16 9 15.3284 9 14.5C9 12.567 7.433 11 5.5 11Z"
              fill="#152C70"
            ></path>{" "}
          </g>
        </svg>
      );
    case "inbox2":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 12V7.2C5 6.0799 5 5.51984 5.21799 5.09202C5.40973 4.71569 5.71569 4.40973 6.09202 4.21799C6.51984 4 7.07989 4 8.2 4H15.8C16.9201 4 17.4802 4 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C19 5.51984 19 6.0799 19 7.2V12M3 12V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V12H17.3255C16.8363 12 16.5917 12 16.3615 12.0553C16.1575 12.1043 15.9624 12.1851 15.7834 12.2947C15.5816 12.4184 15.4086 12.5914 15.0627 12.9373L14.9373 13.0627C14.5914 13.4086 14.4184 13.5816 14.2166 13.7053C14.0376 13.8149 13.8425 13.8957 13.6385 13.9447C13.4083 14 13.1637 14 12.6745 14H11.3255C10.8363 14 10.5917 14 10.3615 13.9447C10.1575 13.8957 9.96237 13.8149 9.78343 13.7053C9.5816 13.5816 9.40864 13.4086 9.06274 13.0627L8.93726 12.9373C8.59135 12.5914 8.4184 12.4184 8.21657 12.2947C8.03763 12.1851 7.84254 12.1043 7.63846 12.0553C7.40829 12 7.1637 12 6.67452 12H3Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "star":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              fill="#fdd835"
            ></path>
            <path
              d="M67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              fill="#ffff8d"
            ></path>
            <path
              d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              fill="#f4b400"
            ></path>
          </g>
        </svg>
      );
    case "star2":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
            className="stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          className={finalClassName}
          fill="#ff384c"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ff384c"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
          </g>
        </svg>
      );
    case "calendar2":
      return (
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
        </svg>
      );
    case "layers":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M58.38 21.701C58.3845 22.4886 58.1675 23.2616 57.7538 23.9318C57.34 24.6019 56.7461 25.1423 56.0399 25.491L34.27 36.371C33.6842 36.6676 33.0366 36.8218 32.38 36.821C31.7233 36.8218 31.0758 36.6676 30.49 36.371L8.71994 25.491C8.01597 25.1422 7.42371 24.6032 7.01016 23.9352C6.59662 23.2671 6.37835 22.4967 6.37998 21.711C6.37694 20.9238 6.59455 20.1514 7.00815 19.4815C7.42174 18.8116 8.01474 18.271 8.71994 17.921L30.49 7.04104C31.0765 6.74751 31.7241 6.59674 32.38 6.60104C33.0358 6.59674 33.6835 6.74751 34.27 7.04104L56.0399 17.921C56.7439 18.2699 57.3362 18.8089 57.7497 19.4769C58.1633 20.1449 58.3816 20.9154 58.38 21.701Z"
              fill="#38a35c"
            ></path>{" "}
            <path
              d="M56.04 27.9509C56.7452 28.3009 57.3382 28.8415 57.7518 29.5114C58.1654 30.1813 58.383 30.9537 58.38 31.741C58.3816 32.5266 58.1633 33.2971 57.7498 33.9651C57.3362 34.6331 56.744 35.1721 56.04 35.521L34.27 46.4109C33.6818 46.6997 33.0353 46.8502 32.38 46.851C31.7247 46.8502 31.0782 46.6997 30.49 46.4109L8.71998 35.521C8.01722 35.1715 7.42642 34.6322 7.0146 33.964C6.60277 33.2959 6.38643 32.5258 6.39002 31.741C6.38547 30.9534 6.60242 30.1804 7.01618 29.5102C7.42995 28.84 8.02383 28.2997 8.72999 27.9509L8.95002 27.8409L13.42 30.0809L29.6 38.1609C30.4632 38.5928 31.4148 38.8187 32.38 38.821C33.3484 38.8187 34.3032 38.5928 35.17 38.1609L51.34 30.0809L55.82 27.8409L56.04 27.9509Z"
              fill="#38a35c"
            ></path>{" "}
            <path
              d="M56.04 37.991C56.7439 38.3399 57.3362 38.8788 57.7497 39.5468C58.1633 40.2149 58.3816 40.9853 58.38 41.771C58.3816 42.5567 58.1633 43.3271 57.7497 43.9951C57.3362 44.6631 56.7439 45.2021 56.04 45.551L34.27 56.441C33.6842 56.7376 33.0366 56.8918 32.38 56.891C31.7234 56.8918 31.0758 56.7376 30.49 56.441L8.71996 45.551C8.0172 45.2015 7.4264 44.6622 7.01458 43.9941C6.60275 43.3259 6.38641 42.5558 6.39 41.771C6.3843 40.9857 6.59977 40.2147 7.01183 39.5462C7.42389 38.8777 8.01586 38.3387 8.71996 37.991L8.95 37.871L13.43 40.111L29.61 48.201C30.4708 48.6285 31.4189 48.851 32.38 48.851C33.3442 48.8499 34.2952 48.6275 35.16 48.201L51.35 40.111L55.81 37.871L56.04 37.991Z"
              fill="#38a35c"
            ></path>{" "}
          </g>
        </svg>
      );
    case "layers2":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6776 2.30337C11.5101 1.89888 12.4899 1.89888 13.3223 2.30337L20.6379 5.85815C22.454 6.74064 22.454 9.25936 20.6379 10.1419L13.3223 13.6966C12.4899 14.1011 11.5101 14.1011 10.6776 13.6966L3.36208 10.1419C1.54595 9.25936 1.54595 6.74064 3.36208 5.85815L10.6776 2.30337ZM12.4408 4.01685C12.1633 3.88202 11.8367 3.88202 11.5592 4.01685L4.24364 7.57163C3.88042 7.74813 3.88042 8.25187 4.24364 8.42837L11.5592 11.9831C11.8367 12.118 12.1633 12.118 12.4408 11.9831L19.7563 8.42837C20.1196 8.25187 20.1195 7.74813 19.7563 7.57163L12.4408 4.01685Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M2.10555 16.8172C2.35254 16.3232 2.95321 16.123 3.44719 16.37L11.5528 20.4227C11.8343 20.5635 12.1657 20.5635 12.4472 20.4227L20.5528 16.37C21.0467 16.123 21.6474 16.3232 21.8944 16.8172C22.1414 17.3111 21.9412 17.9118 21.4472 18.1588L13.3416 22.2116C12.497 22.6339 11.5029 22.6339 10.6583 22.2116L2.55276 18.1588C2.05878 17.9118 1.85856 17.3111 2.10555 16.8172Z"
            fill="#0F0F0F"
          ></path>
          <path
            d="M3.44742 12.1058C2.95344 11.8588 2.35277 12.059 2.10578 12.553C1.85879 13.047 2.05901 13.6477 2.55299 13.8946L10.6586 17.9474C11.5031 18.3697 12.4973 18.3697 13.3418 17.9474L21.4474 13.8946C21.9414 13.6477 22.1416 13.047 21.8946 12.553C21.6476 12.059 21.047 11.8588 20.553 12.1058L12.4474 16.1586C12.1659 16.2993 11.8345 16.2993 11.553 16.1586L3.44742 12.1058Z"
            fill="#0F0F0F"
          ></path>
        </svg>
      );
    case "archive":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M16 2H0V5H16V2Z" fill="#8d8686"></path>{" "}
            <path d="M1 7H5V9H11V7H15V15H1V7Z" fill="#8d8686"></path>{" "}
          </g>
        </svg>
      );
    case "archive2":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 14H15M4.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V5.6C21 5.03995 21 4.75992 20.891 4.54601C20.7951 4.35785 20.6422 4.20487 20.454 4.10899C20.2401 4 19.9601 4 19.4 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10ZM5 10H19V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H8.2C7.07989 20 6.51984 20 6.09202 19.782C5.71569 19.5903 5.40973 19.2843 5.21799 18.908C5 18.4802 5 17.9201 5 16.8V10Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "logbook":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <defs>
              {" "}
              <style>{`.cls-1{fill:#4b6ea4;}.cls-2{fill:#445f96;}.cls-3{fill:#a09b8c;}.cls-4{fill:#f1f2f2;}.cls-5{fill:#4c5665;}`}</style>{" "}
            </defs>{" "}
            <title></title>{" "}
            <g id="Book">
              {" "}
              <rect
                className="cls-1"
                height="48"
                rx="2"
                ry="2"
                width="34"
                x="8"
              ></rect>{" "}
              <path
                className="cls-2"
                d="M10,0h2a0,0,0,0,1,0,0V48a0,0,0,0,1,0,0H10a2,2,0,0,1-2-2V2A2,2,0,0,1,10,0Z"
              ></path>{" "}
              <path
                className="cls-3"
                d="M40,44H10a2,2,0,0,0,0,4H40a2,2,0,0,0,2-2V42A2.006,2.006,0,0,1,40,44Z"
              ></path>{" "}
              <path
                className="cls-4"
                d="M40,44H10a2,2,0,0,0,0,4H40a2,2,0,0,0,2-2V42A2.006,2.006,0,0,1,40,44Z"
              ></path>{" "}
              <path
                className="cls-5"
                d="M42,44v2a2.006,2.006,0,0,1-2,2H10a2,2,0,0,1-1.73-3A2,2,0,0,0,10,46H40A2.006,2.006,0,0,0,42,44Z"
              ></path>{" "}
              <rect
                className="cls-2"
                height="10"
                rx="1"
                ry="1"
                width="19"
                x="17"
                y="6"
              ></rect>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "book":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7.00003H4M8 12H4M8 17H4M12 3V21M9.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V6.20003C20 5.07993 20 4.51987 19.782 4.09205C19.5903 3.71573 19.2843 3.40977 18.908 3.21802C18.4802 3.00003 17.9201 3.00003 16.8 3.00003H9.2C8.07989 3.00003 7.51984 3.00003 7.09202 3.21802C6.71569 3.40977 6.40973 3.71573 6.21799 4.09205C6 4.51987 6 5.07993 6 6.20003V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      );
    case "time":
      return (
        <svg
          className={className}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
              width="48"
              height="48"
              fill="white"
              fillOpacity="0.01"
            ></rect>{" "}
            <path
              d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
              fill="#2F88FF"
              stroke="#000000"
              strokeWidth="4"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M24.0083 12L24.0071 24.0088L32.4865 32.4882"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    case "time2":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g clipPath="url(#clip0_901_3152)">
              {" "}
              <path
                d="M27 1C29.21 1 31 2.79 31 5C31 7.21 29.21 9 27 9C26.98 9 26.96 8.99 26.94 8.99C26.83 8.81 26.71 8.63 26.58 8.45C26.52 8.37 26.46 8.29 26.41 8.22C26.18 7.91 25.93 7.61 25.67 7.32C25.65 7.3 25.63 7.28 25.62 7.26C25.34 6.95 25.05 6.66 24.74 6.38C24.72 6.37 24.7 6.35 24.68 6.33C24.39 6.07 24.09 5.82 23.78 5.59C23.71 5.54 23.63 5.48 23.55 5.42C23.37 5.29 23.19 5.17 23.01 5.06C23.01 5.04 23 5.02 23 5C23 2.79 24.79 1 27 1ZM9 5C9 5.02 8.99 5.04 8.99 5.06C8.81 5.17 8.63 5.29 8.45 5.42C8.37 5.48 8.29 5.54 8.22 5.59C7.91 5.82 7.61 6.07 7.32 6.33C7.3 6.35 7.28 6.37 7.26 6.38C6.95 6.66 6.66 6.95 6.38 7.26C6.37 7.28 6.35 7.3 6.33 7.32C6.07 7.61 5.82 7.91 5.59 8.22C5.54 8.29 5.48 8.37 5.42 8.45C5.29 8.63 5.17 8.81 5.06 8.99C5.04 8.99 5.02 9 5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5Z"
                fill="#668077"
              ></path>{" "}
              <path
                d="M26.9404 8.99C28.2404 11.01 29.0004 13.42 29.0004 16C29.0004 23.179 23.1794 29 16.0004 29C8.82043 29 3.00043 23.179 3.00043 16C3.00043 13.42 3.75943 11.01 5.05943 8.99C5.17943 8.809 5.29943 8.63 5.41943 8.45C5.48043 8.37 5.54043 8.29 5.58943 8.219C5.83043 7.91 6.08043 7.61 6.33043 7.32C6.34943 7.3 6.37043 7.28 6.37943 7.26C6.66943 6.96 6.96043 6.67 7.25943 6.38C7.28043 6.37 7.29943 6.349 7.32043 6.33C7.61043 6.08 7.91043 5.83 8.21943 5.59C8.29043 5.54 8.37043 5.48 8.45043 5.42C8.62943 5.3 8.80943 5.179 8.99043 5.059C11.0094 3.76 13.4194 3 16.0004 3C18.5804 3 20.9904 3.76 23.0094 5.059C23.1904 5.179 23.3704 5.3 23.5494 5.42C23.6294 5.48 23.7104 5.54 23.7804 5.59C24.0894 5.83 24.3894 6.08 24.6794 6.33C24.7004 6.349 24.7194 6.37 24.7404 6.38C25.0404 6.67 25.3304 6.96 25.6204 7.26C25.6294 7.28 25.6504 7.3 25.6694 7.32C25.9194 7.61 26.1694 7.91 26.4104 8.219C26.4604 8.29 26.5194 8.37 26.5804 8.45C26.7004 8.63 26.8204 8.809 26.9404 8.99Z"
                fill="#FFC44D"
              ></path>{" "}
              <path
                d="M16 3.0001C23.18 3.0001 29 8.8201 29 16.0001C29 23.1801 23.18 29.0001 16 29.0001C8.81998 29.0001 2.99998 23.1801 2.99998 16.0001C2.99998 8.8201 8.81998 3.0001 16 3.0001ZM16 3.0001V1.0001M9.31148 27.1476L6.99948 31.0006M29.7686 7.879C30.5256 7.15 30.9996 6.133 30.9996 5C30.9996 2.79 29.2096 1 26.9996 1C25.8676 1 24.8496 1.475 24.1216 2.232M7.87888 2.2315C7.14988 1.4745 6.13288 1.0005 4.99988 1.0005C2.78988 1.0005 0.999878 2.7905 0.999878 5.0005C0.999878 6.1325 1.47488 7.1505 2.23188 7.8785M22 12.0001L14 20.0001L9.99998 16.0001M25 31.0001L22.689 27.1481"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="clip0_901_3152">
                {" "}
                <rect width="32" height="32" fill="white"></rect>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </g>
        </svg>
      );
    case "time3":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
              fill="#0F0F0F"
            ></path>{" "}
            <path
              d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
              fill="#0F0F0F"
            ></path>{" "}
          </g>
        </svg>
      );
    case "eraser":
      return (
        <svg className={finalClassName} viewBox="0 0 1699 660">
          <path
            fill="#EC2C40"
            d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
          ></path>
          <path
            fill="#00A9E5"
            d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
          ></path>
        </svg>
      );
    case "eraser2":
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M17.9995 13L10.9995 6.00004M20.9995 21H7.99955M10.9368 20.0628L19.6054 11.3941C20.7935 10.2061 21.3875 9.61207 21.6101 8.92709C21.8058 8.32456 21.8058 7.67551 21.6101 7.07298C21.3875 6.388 20.7935 5.79397 19.6054 4.60592L19.3937 4.39415C18.2056 3.2061 17.6116 2.61207 16.9266 2.38951C16.3241 2.19373 15.675 2.19373 15.0725 2.38951C14.3875 2.61207 13.7935 3.2061 12.6054 4.39415L4.39366 12.6059C3.20561 13.794 2.61158 14.388 2.38902 15.073C2.19324 15.6755 2.19324 16.3246 2.38902 16.9271C2.61158 17.6121 3.20561 18.2061 4.39366 19.3941L5.06229 20.0628C5.40819 20.4087 5.58114 20.5816 5.78298 20.7053C5.96192 20.815 6.15701 20.8958 6.36108 20.9448C6.59126 21 6.83585 21 7.32503 21H8.67406C9.16324 21 9.40784 21 9.63801 20.9448C9.84208 20.8958 10.0372 20.815 10.2161 20.7053C10.418 20.5816 10.5909 20.4087 10.9368 20.0628Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    case "filter":
      return (
        <svg
          className={finalClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(90)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 12L5 4"
              stroke="#222222"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M19 20L19 17"
              stroke="#222222"
              strokeLinecap="round"
            ></path>{" "}
            <path d="M5 20L5 16" stroke="#222222" strokeLinecap="round"></path>{" "}
            <path d="M19 13L19 4" stroke="#222222" strokeLinecap="round"></path>{" "}
            <path d="M12 7L12 4" stroke="#222222" strokeLinecap="round"></path>{" "}
            <path
              d="M12 20L12 11"
              stroke="#222222"
              strokeLinecap="round"
            ></path>{" "}
            <circle
              cx="5"
              cy="14"
              r="2"
              stroke="#222222"
              strokeLinecap="round"
            ></circle>{" "}
            <circle
              cx="12"
              cy="9"
              r="2"
              stroke="#222222"
              strokeLinecap="round"
            ></circle>{" "}
            <circle
              cx="19"
              cy="15"
              r="2"
              stroke="#222222"
              strokeLinecap="round"
            ></circle>{" "}
          </g>
        </svg>
      );
    default:
      return null;
  }
}
