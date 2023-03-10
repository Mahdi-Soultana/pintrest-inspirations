function Nav() {
  return (
    <div className="h-[60px] w-full flex justify-between items-center px-6">
      <span className="w-4 h-4 "></span>
      <span className="w-36 h-full flex items-center  ">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 432 115.93"
        >
          <g>
            <path
              d="M128.23,227H110.05c0,24.73-.07,40.75-.11,65.48C102.13,268.38,94.3,252.4,86.46,227H69V343c5.89-.84,12.21-1.65,18.11-2.42,0-24.23,0-39.12,0-63.35,8.12,23.85,13.11,37.91,21.21,60.58,6.35-.72,13.32-1.62,19.67-2.26q.11-54.24.19-108.49"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M196.16,227H145.78q-.1,53.49-.2,107,25.28-2.3,50.61-3.76c0-5.21,0-12.7,0-17.92-11,.68-21.48,1.38-32.42,2.12,0-9.59,0-17.51.06-27.1,8-.14,16.44,0,24.61-.16,0-5.24,0-12.76,0-18-8.1.15-16.65.17-24.61.32,0-9.59,0-14.85.06-24.43,5-.06,9.92-.07,14.82-.07h5.15c4.09,0,8.19,0,12.37,0,0-5.21-.13-12.7-.12-17.92"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M264.07,227.11H208c0,5.17,0,12.63,0,17.81h2.41c2.44,0,4.87,0,7.31,0s4.87.05,7.31.05h1.87c0,28.74-.07,55-.11,83.73,5.93-.22,12.29-.4,18.22-.55,0-28.59.06-54.68.08-83.27l19-.05c0-5.09,0-12.67,0-17.77"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M326.46,227H275.87q0,50.34,0,100.68h5.92c4,0,8.12,0,12.1,0,0-14.24,0-27.24,0-41.48h3l7.14,0,7.2,0c2.46,0,4.9,0,7.28,0,0-5.1,0-12.7,0-17.8-2.25,0-4.55,0-6.88,0H304.1l-7.44,0h-2.79c0-9.16,0-14.32,0-23.48h17.91c4.88,0,9.77,0,14.71,0,0-5.12,0-12.87,0-18"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M338.27,227.12c0,33.88-.12,67.76-.07,101.64,16.17.6,33.17,1.26,49.32,2.37,0-5.21,0-12.7,0-17.92-10.23-.6-20.87-1.32-31.1-1.74-.05-29,.11-55.34.07-84.35H338.27"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M402.44,227.12l.21,105.12c5.93.45,12.06.95,18,1.47q0-53.25,0-106.59H402.44"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
            <path
              d="M436.22,227.12c7.28,17.72,13.93,35.48,21.31,54.3-7.67,18.07-15.49,36-23.15,53.36,6.35.63,12.92,1.54,19.27,2.25,4.55-11.16,8.69-19.76,13.25-31.23,4.55,12.22,8.68,21.66,13.22,34.26,6.34.83,14.55,2,20.88,2.91-7.67-20.51-16.06-41.86-23.77-61.24,7.68-18.2,15.52-35.58,23.49-54.6H480.86c-4.92,11.76-8.31,19.32-13,30.52-4.39-11.65-7.34-19.19-11.75-30.52H436.22"
              transform="translate(-69 -227.03)"
              style={{ fill: '#ed2517' }}
            />
          </g>
        </svg>
      </span>
      <div className=" flex items-center space-x-3">
        <div className="w-[45px] rounded-full  h-[45px] overflow-hidden border p-[1.8px]">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="w-full h-full object-cover block rounded-full"
          />
        </div>
        <p className="text-sm font-extralight">Mahdi Soultana</p>
      </div>
    </div>
  );
}

export default Nav;
