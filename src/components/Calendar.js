export default function Calendar() {
  return (
    <div  id="agenda" className=" p-6 " >
     
      <iframe
        src="https://embed.styledcalendar.com/#rqh6A0DP4tUlDoyASTQO"
        title="Styled Calendar"
        className=" styled-calendar-container w-full "
        data-cy="calendar-embed-iframe"

      ></iframe>
      <script
        async
        type="module"
        src="https://embed.styledcalendar.com/assets/parent-window.js"
    
      ></script>
    </div>
  );
}
