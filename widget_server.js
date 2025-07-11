(function() {
  var gr = new GlideRecord('u_body_map_update');
  gr.query();

  var events = [];

  while (gr.next()) {
    var status = gr.u_action_status.toString();
    var color = (status == 'Follow-up Required') ? '#ff4d4d' : '#28a745';

    events.push({
      id: gr.getUniqueValue(),
      title: gr.u_client.getDisplayValue(),
      start: gr.u_follow_up_date,
      color: color
    });
  }

  data.events = events;
})();
