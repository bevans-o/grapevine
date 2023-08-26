import React from 'react'

function Logo({ type }: {type: string}) {
  return (
    <>
      {type === "full" && <svg xmlns="http://www.w3.org/2000/svg" width="273" height="60" viewBox="0 0 91 20" fill="none">
        <path d="M31.754 11.276V9.876H36.472C36.4907 10.5947 36.3973 11.276 36.192 11.92C35.9867 12.5547 35.6787 13.1193 35.268 13.614C34.8573 14.1087 34.344 14.5007 33.728 14.79C33.1213 15.07 32.4307 15.21 31.656 15.21C30.9187 15.21 30.2373 15.0887 29.612 14.846C28.9867 14.594 28.4407 14.2393 27.974 13.782C27.5167 13.3247 27.162 12.7833 26.91 12.158C26.658 11.5327 26.532 10.8467 26.532 10.1C26.532 9.35333 26.658 8.672 26.91 8.056C27.1713 7.43067 27.5307 6.894 27.988 6.446C28.4547 5.98867 29.0007 5.63867 29.626 5.396C30.2607 5.15333 30.9467 5.032 31.684 5.032C32.328 5.032 32.9113 5.12067 33.434 5.298C33.9567 5.466 34.4233 5.71333 34.834 6.04C35.254 6.35733 35.6087 6.74467 35.898 7.202L34.554 8.098C34.2833 7.63133 33.9053 7.258 33.42 6.978C32.944 6.698 32.3653 6.558 31.684 6.558C31.0493 6.558 30.4753 6.70733 29.962 7.006C29.4487 7.29533 29.038 7.706 28.73 8.238C28.422 8.76067 28.268 9.38133 28.268 10.1C28.268 10.8093 28.4173 11.4347 28.716 11.976C29.024 12.508 29.4347 12.9233 29.948 13.222C30.4613 13.5207 31.04 13.67 31.684 13.67C32.1227 13.67 32.5147 13.6093 32.86 13.488C33.2053 13.3667 33.504 13.194 33.756 12.97C34.008 12.746 34.218 12.4893 34.386 12.2C34.554 11.9107 34.68 11.6027 34.764 11.276H31.754ZM39.5382 8.56V15H38.0402V8.56H39.5382ZM41.4562 10.17C41.3162 10.058 41.1856 9.974 41.0642 9.918C40.9429 9.862 40.7889 9.834 40.6022 9.834C40.3502 9.834 40.1449 9.89933 39.9862 10.03C39.8276 10.1607 39.7109 10.3427 39.6362 10.576C39.5709 10.8 39.5382 11.066 39.5382 11.374L39.0342 11.08C39.0342 10.5667 39.1276 10.114 39.3142 9.722C39.5102 9.32067 39.7576 9.00333 40.0562 8.77C40.3642 8.53667 40.6816 8.42 41.0082 8.42C41.2416 8.42 41.4609 8.45733 41.6662 8.532C41.8716 8.59733 42.0442 8.71867 42.1842 8.896L41.4562 10.17ZM44.1739 12.998C44.1739 13.2127 44.2252 13.3993 44.3279 13.558C44.4305 13.7073 44.5705 13.8193 44.7479 13.894C44.9345 13.9687 45.1445 14.006 45.3779 14.006C45.6765 14.006 45.9472 13.9453 46.1899 13.824C46.4419 13.7027 46.6425 13.5253 46.7919 13.292C46.9505 13.0493 47.0299 12.7693 47.0299 12.452L47.2539 13.292C47.2539 13.7027 47.1325 14.048 46.8899 14.328C46.6565 14.5987 46.3579 14.804 45.9939 14.944C45.6392 15.0747 45.2752 15.14 44.9019 15.14C44.5005 15.14 44.1272 15.0607 43.7819 14.902C43.4365 14.7433 43.1612 14.51 42.9559 14.202C42.7505 13.894 42.6479 13.5207 42.6479 13.082C42.6479 12.4567 42.8672 11.962 43.3059 11.598C43.7445 11.2247 44.3652 11.038 45.1679 11.038C45.5972 11.038 45.9659 11.0847 46.2739 11.178C46.5912 11.2713 46.8525 11.3833 47.0579 11.514C47.2632 11.6353 47.4079 11.7473 47.4919 11.85V12.62C47.2025 12.4147 46.8945 12.2653 46.5679 12.172C46.2412 12.0787 45.8959 12.032 45.5319 12.032C45.2145 12.032 44.9579 12.074 44.7619 12.158C44.5659 12.2327 44.4165 12.34 44.3139 12.48C44.2205 12.62 44.1739 12.7927 44.1739 12.998ZM43.6979 10.24L43.0819 9.176C43.3712 8.99867 43.7445 8.826 44.2019 8.658C44.6685 8.49 45.2005 8.406 45.7979 8.406C46.3299 8.406 46.7965 8.48533 47.1979 8.644C47.6085 8.80267 47.9305 9.03133 48.1639 9.33C48.3972 9.61933 48.5139 9.97867 48.5139 10.408V15H47.0299V10.702C47.0299 10.4967 46.9925 10.3287 46.9179 10.198C46.8525 10.0673 46.7592 9.96 46.6379 9.876C46.5165 9.792 46.3719 9.73133 46.2039 9.694C46.0359 9.65667 45.8539 9.638 45.6579 9.638C45.3592 9.638 45.0745 9.67533 44.8039 9.75C44.5425 9.81533 44.3139 9.89933 44.1179 10.002C43.9312 10.0953 43.7912 10.1747 43.6979 10.24ZM51.7465 18.08H50.2205V8.56H51.7465V18.08ZM57.0805 11.78C57.0805 12.4893 56.9359 13.1007 56.6465 13.614C56.3572 14.118 55.9745 14.5053 55.4985 14.776C55.0225 15.0373 54.5045 15.168 53.9445 15.168C53.3939 15.168 52.9132 15.0327 52.5025 14.762C52.1012 14.482 51.7885 14.09 51.5645 13.586C51.3499 13.0727 51.2425 12.4707 51.2425 11.78C51.2425 11.08 51.3499 10.478 51.5645 9.974C51.7885 9.47 52.1012 9.08267 52.5025 8.812C52.9132 8.532 53.3939 8.392 53.9445 8.392C54.5045 8.392 55.0225 8.52733 55.4985 8.798C55.9745 9.05933 56.3572 9.442 56.6465 9.946C56.9359 10.45 57.0805 11.0613 57.0805 11.78ZM55.5125 11.78C55.5125 11.3507 55.4239 10.9867 55.2465 10.688C55.0692 10.38 54.8312 10.1513 54.5325 10.002C54.2432 9.84333 53.9212 9.764 53.5665 9.764C53.2772 9.764 52.9925 9.84333 52.7125 10.002C52.4325 10.1513 52.1992 10.3753 52.0125 10.674C51.8352 10.9727 51.7465 11.3413 51.7465 11.78C51.7465 12.2187 51.8352 12.5873 52.0125 12.886C52.1992 13.1847 52.4325 13.4133 52.7125 13.572C52.9925 13.7213 53.2772 13.796 53.5665 13.796C53.9212 13.796 54.2432 13.7213 54.5325 13.572C54.8312 13.4133 55.0692 13.1847 55.2465 12.886C55.4239 12.578 55.5125 12.2093 55.5125 11.78ZM61.3207 15.14C60.6674 15.14 60.0887 15 59.5847 14.72C59.09 14.44 58.7074 14.048 58.4367 13.544C58.166 13.04 58.0307 12.452 58.0307 11.78C58.0307 11.0987 58.166 10.506 58.4367 10.002C58.7167 9.498 59.1087 9.11067 59.6127 8.84C60.1167 8.56 60.7094 8.42 61.3907 8.42C62.072 8.42 62.6507 8.55067 63.1267 8.812C63.6027 9.07333 63.9667 9.45133 64.2187 9.946C64.48 10.4313 64.6107 11.0193 64.6107 11.71C64.6107 11.7847 64.606 11.864 64.5967 11.948C64.5967 12.032 64.592 12.0927 64.5827 12.13H58.9267V11.094H63.2947L62.8327 11.738C62.8607 11.682 62.8887 11.6073 62.9167 11.514C62.954 11.4113 62.9727 11.3273 62.9727 11.262C62.9727 10.9167 62.9027 10.618 62.7627 10.366C62.632 10.114 62.4454 9.918 62.2027 9.778C61.9694 9.638 61.694 9.568 61.3767 9.568C60.994 9.568 60.6674 9.652 60.3967 9.82C60.126 9.988 59.9207 10.2307 59.7807 10.548C59.6407 10.8653 59.566 11.2573 59.5567 11.724C59.5567 12.1907 59.6267 12.5873 59.7667 12.914C59.9067 13.2313 60.112 13.474 60.3827 13.642C60.6627 13.81 60.9987 13.894 61.3907 13.894C61.8014 13.894 62.1607 13.81 62.4687 13.642C62.7767 13.474 63.0334 13.2173 63.2387 12.872L64.5407 13.404C64.2047 13.9827 63.7707 14.4167 63.2387 14.706C62.7067 14.9953 62.0674 15.14 61.3207 15.14ZM64.8688 8.56H66.5208L68.2008 12.718L69.8808 8.56H71.5468L68.2008 15.588L64.8688 8.56ZM72.4373 5.998C72.4373 5.73667 72.5307 5.51733 72.7173 5.34C72.9133 5.16267 73.1373 5.074 73.3893 5.074C73.66 5.074 73.884 5.16267 74.0613 5.34C74.248 5.51733 74.3413 5.73667 74.3413 5.998C74.3413 6.25 74.248 6.46933 74.0613 6.656C73.884 6.83333 73.66 6.922 73.3893 6.922C73.1373 6.922 72.9133 6.83333 72.7173 6.656C72.5307 6.46933 72.4373 6.25 72.4373 5.998ZM72.6473 8.56H74.1313V15H72.6473V8.56ZM80.3561 11.08C80.3561 10.604 80.2581 10.2447 80.0621 10.002C79.8661 9.75933 79.5628 9.638 79.1521 9.638C78.8721 9.638 78.6248 9.69867 78.4101 9.82C78.1954 9.932 78.0274 10.1 77.9061 10.324C77.7848 10.5387 77.7241 10.7907 77.7241 11.08V15H76.2121V8.56H77.7241V9.554C77.9294 9.17133 78.1908 8.88667 78.5081 8.7C78.8348 8.51333 79.2221 8.42 79.6701 8.42C80.3981 8.42 80.9534 8.644 81.3361 9.092C81.7188 9.53067 81.9101 10.1373 81.9101 10.912V15H80.3561V11.08ZM86.641 15.14C85.9877 15.14 85.409 15 84.905 14.72C84.4103 14.44 84.0277 14.048 83.757 13.544C83.4863 13.04 83.351 12.452 83.351 11.78C83.351 11.0987 83.4863 10.506 83.757 10.002C84.037 9.498 84.429 9.11067 84.933 8.84C85.437 8.56 86.0297 8.42 86.711 8.42C87.3923 8.42 87.971 8.55067 88.447 8.812C88.923 9.07333 89.287 9.45133 89.539 9.946C89.8003 10.4313 89.931 11.0193 89.931 11.71C89.931 11.7847 89.9263 11.864 89.917 11.948C89.917 12.032 89.9123 12.0927 89.903 12.13H84.247V11.094H88.615L88.153 11.738C88.181 11.682 88.209 11.6073 88.237 11.514C88.2743 11.4113 88.293 11.3273 88.293 11.262C88.293 10.9167 88.223 10.618 88.083 10.366C87.9523 10.114 87.7657 9.918 87.523 9.778C87.2897 9.638 87.0143 9.568 86.697 9.568C86.3143 9.568 85.9877 9.652 85.717 9.82C85.4463 9.988 85.241 10.2307 85.101 10.548C84.961 10.8653 84.8863 11.2573 84.877 11.724C84.877 12.1907 84.947 12.5873 85.087 12.914C85.227 13.2313 85.4323 13.474 85.703 13.642C85.983 13.81 86.319 13.894 86.711 13.894C87.1217 13.894 87.481 13.81 87.789 13.642C88.097 13.474 88.3537 13.2173 88.559 12.872L89.861 13.404C89.525 13.9827 89.091 14.4167 88.559 14.706C88.027 14.9953 87.3877 15.14 86.641 15.14Z" fill="white"/>
        <g filter="url(#filter0_dii_8_684)">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.7417 6.53871C22.0869 6.19235 22.086 5.63172 21.7396 5.28652C21.3933 4.94131 20.8326 4.94225 20.4874 5.2886C19.8221 5.95617 19.2094 6.30166 18.6484 6.45739C18.0886 6.61277 17.5172 6.59681 16.9055 6.4431C15.7086 6.14236 14.4908 5.36203 13.0894 4.46408L12.7812 4.2668C11.3283 3.33833 9.67064 2.31648 7.89273 2.06137C6.00896 1.79108 4.11711 2.38834 2.24393 4.35727C1.90687 4.71156 1.92084 5.27201 2.27513 5.60907C2.62942 5.94613 3.18987 5.93216 3.52694 5.57787C5.06545 3.96071 6.40663 3.63714 7.64121 3.81429C8.51954 3.94031 9.40026 4.32461 10.3251 4.84427C10.1001 4.95733 9.87427 5.08868 9.65463 5.24004C8.80036 5.82873 7.99375 6.75633 7.76737 8.11461L9.51414 8.40574C9.64193 7.63899 10.0897 7.09086 10.6595 6.6982C11.2257 6.30798 11.8667 6.10732 12.2706 6.04329C12.9058 6.45157 13.5716 6.87683 14.2565 7.24825C13.6358 8.15829 13.0679 9.54484 13.0679 11.3592H14.8388C14.8388 9.67215 15.4553 8.54884 15.9082 7.99214C16.0961 8.05645 16.2847 8.11304 16.4739 8.16057C17.3199 8.37315 18.2095 8.41705 19.122 8.16374C20.0333 7.91079 20.9042 7.37905 21.7417 6.53871Z" fill="url(#paint0_linear_8_684)"/>
        </g>
        <g filter="url(#filter1_ii_8_684)">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 10.5417C4 8.58569 5.58569 7 7.54173 7C8.80847 7 9.91989 7.66502 10.5459 8.66498C8.53218 9.42038 7.09898 11.3632 7.09898 13.6407C7.09898 13.7812 7.10443 13.9203 7.11513 14.058C5.36024 13.8474 4 12.3534 4 10.5417ZM12.4116 9.65631C10.2111 9.65631 8.42715 11.4402 8.42715 13.6408C8.42715 15.8413 10.2111 17.6252 12.4116 17.6252C14.6122 17.6252 16.3961 15.8413 16.3961 13.6408C16.3961 11.4402 14.6122 9.65631 12.4116 9.65631Z" fill="url(#paint1_linear_8_684)"/>
        </g>
        <defs>
        <filter id="filter0_dii_8_684" x="0" y="1" width="24" height="13.3592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_684"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_684" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_8_684"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-0.5"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_8_684" result="effect3_innerShadow_8_684"/>
        </filter>
        <filter id="filter1_ii_8_684" x="4" y="6.5" width="12.396" height="12.1252" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="0.25"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8_684"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_8_684" result="effect2_innerShadow_8_684"/>
        </filter>
        <linearGradient id="paint0_linear_8_684" x1="12.8906" y1="-0.77954" x2="14.6198" y2="11.5386" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877CF"/>
        <stop offset="0.0001" stopColor="#CDCF77"/>
        <stop offset="1" stopColor="#368B34"/>
        </linearGradient>
        <linearGradient id="paint1_linear_8_684" x1="10.198" y1="7" x2="10.198" y2="17.6252" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B975D0"/>
        <stop offset="1" stopColor="#6F3E81"/>
        </linearGradient>
        </defs>
      </svg>}


      {type === "icon" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
      <g filter="url(#filter0_dii_8_695)">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.7417 5.53871C22.0869 5.19235 22.086 4.63172 21.7396 4.28652C21.3933 3.94131 20.8326 3.94225 20.4874 4.2886C19.8221 4.95617 19.2094 5.30166 18.6484 5.45739C18.0886 5.61277 17.5172 5.59681 16.9055 5.4431C15.7086 5.14236 14.4908 4.36203 13.0894 3.46408L12.7812 3.2668C11.3283 2.33833 9.67064 1.31648 7.89273 1.06137C6.00896 0.791078 4.11711 1.38834 2.24393 3.35727C1.90687 3.71156 1.92084 4.27201 2.27513 4.60907C2.62942 4.94613 3.18987 4.93216 3.52694 4.57787C5.06545 2.96071 6.40663 2.63714 7.64121 2.81429C8.51954 2.94031 9.40026 3.32461 10.3251 3.84427C10.1001 3.95733 9.87427 4.08868 9.65463 4.24004C8.80036 4.82873 7.99375 5.75633 7.76737 7.11461L9.51414 7.40574C9.64193 6.63899 10.0897 6.09086 10.6595 5.6982C11.2257 5.30798 11.8667 5.10732 12.2706 5.04329C12.9058 5.45157 13.5716 5.87683 14.2565 6.24825C13.6358 7.15829 13.0679 8.54484 13.0679 10.3592H14.8388C14.8388 8.67215 15.4553 7.54884 15.9082 6.99214C16.0961 7.05645 16.2847 7.11304 16.4739 7.16057C17.3199 7.37315 18.2095 7.41705 19.122 7.16374C20.0333 6.91079 20.9042 6.37905 21.7417 5.53871Z" fill="url(#paint0_linear_8_695)"/>
      </g>
      <g filter="url(#filter1_ii_8_695)">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 9.54173C4 7.58569 5.58569 6 7.54173 6C8.80847 6 9.91989 6.66502 10.5459 7.66498C8.53218 8.42038 7.09898 10.3632 7.09898 12.6407C7.09898 12.7812 7.10443 12.9203 7.11513 13.058C5.36024 12.8474 4 11.3534 4 9.54173ZM12.4116 8.65631C10.2111 8.65631 8.42715 10.4402 8.42715 12.6408C8.42715 14.8413 10.2111 16.6252 12.4116 16.6252C14.6122 16.6252 16.3961 14.8413 16.3961 12.6408C16.3961 10.4402 14.6122 8.65631 12.4116 8.65631Z" fill="url(#paint1_linear_8_695)"/>
      </g>
      <defs>
      <filter id="filter0_dii_8_695" x="0" y="0" width="24" height="13.3592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="1"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_695"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_695" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_8_695"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-0.5"/>
      <feGaussianBlur stdDeviation="0.25"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect2_innerShadow_8_695" result="effect3_innerShadow_8_695"/>
      </filter>
      <filter id="filter1_ii_8_695" x="4" y="5.5" width="12.396" height="12.1252" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-1"/>
      <feGaussianBlur stdDeviation="0.25"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8_695"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_8_695" result="effect2_innerShadow_8_695"/>
      </filter>
      <linearGradient id="paint0_linear_8_695" x1="12.8906" y1="-1.77954" x2="14.6198" y2="10.5386" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A877CF"/>
      <stop offset="0.0001" stopColor="#CDCF77"/>
      <stop offset="1" stopColor="#368B34"/>
      </linearGradient>
      <linearGradient id="paint1_linear_8_695" x1="10.198" y1="6" x2="10.198" y2="16.6252" gradientUnits="userSpaceOnUse">
      <stop stopColor="#B975D0"/>
      <stop offset="1" stopColor="#6F3E81"/>
      </linearGradient>
      </defs>
      </svg>}


      {type === "white" && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
        <g filter="url(#filter0_d_8_662)">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.7417 5.53871C22.0869 5.19235 22.086 4.63172 21.7396 4.28652C21.3933 3.94131 20.8326 3.94225 20.4874 4.2886C19.8221 4.95617 19.2094 5.30166 18.6484 5.45739C18.0886 5.61277 17.5172 5.59681 16.9055 5.4431C15.7086 5.14236 14.4908 4.36203 13.0894 3.46408L12.7812 3.2668C11.3283 2.33833 9.67064 1.31648 7.89273 1.06137C6.00896 0.791078 4.11711 1.38834 2.24393 3.35727C1.90687 3.71156 1.92084 4.27201 2.27513 4.60907C2.62942 4.94613 3.18987 4.93216 3.52694 4.57787C5.06545 2.96071 6.40663 2.63714 7.64121 2.81429C8.51954 2.94031 9.40026 3.32461 10.3251 3.84427C10.1001 3.95733 9.87427 4.08868 9.65463 4.24004C8.80036 4.82873 7.99375 5.75633 7.76737 7.11461L9.51414 7.40574C9.64193 6.63899 10.0897 6.09086 10.6595 5.6982C11.2257 5.30798 11.8667 5.10732 12.2706 5.04329C12.9058 5.45157 13.5716 5.87683 14.2565 6.24825C13.6358 7.15829 13.0679 8.54484 13.0679 10.3592H14.8388C14.8388 8.67215 15.4553 7.54884 15.9082 6.99214C16.0961 7.05645 16.2847 7.11304 16.4739 7.16057C17.3199 7.37315 18.2095 7.41705 19.122 7.16374C20.0333 6.91079 20.9042 6.37905 21.7417 5.53871Z" fill="white"/>
        </g>
        <g filter="url(#filter1_d_8_662)">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 9.54173C4 7.58569 5.58569 6 7.54173 6C8.80847 6 9.91989 6.66502 10.5459 7.66498C8.53218 8.42038 7.09898 10.3632 7.09898 12.6407C7.09898 12.7812 7.10443 12.9203 7.11513 13.058C5.36024 12.8474 4 11.3534 4 9.54173ZM12.4116 8.65631C10.2111 8.65631 8.42715 10.4402 8.42715 12.6408C8.42715 14.8413 10.2111 16.6252 12.4116 16.6252C14.6122 16.6252 16.3961 14.8413 16.3961 12.6408C16.3961 10.4402 14.6122 8.65631 12.4116 8.65631Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_8_662" x="0" y="0" width="24" height="13.3592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_662"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_662" result="shape"/>
        </filter>
        <filter id="filter1_d_8_662" x="2" y="5" width="16.3961" height="14.6252" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_662"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_662" result="shape"/>
        </filter>
        </defs>
      </svg>}
    </>
    
  )
}

export default Logo