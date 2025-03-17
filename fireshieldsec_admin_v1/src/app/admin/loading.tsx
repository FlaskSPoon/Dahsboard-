'use client';
export default function Loading() {
  return (
    <>
      <style jsx>{`
        .loader {
          border: 16px solid #eef0f6;
          border-top: 16px solid #e02234;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
          margin: auto;
          margin-top: 10%;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="loader z-50"></div>
    </>
  );
}
