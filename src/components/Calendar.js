export default function Calendar() {
  return (
    <div  id="agenda" >
     
      <iframe
        src="https://embed.styledcalendar.com/#rqh6A0DP4tUlDoyASTQO"
        title="Styled Calendar"
        className=" styled-calendar-container w-full px-8 md:px-20 lg:px-52"
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
