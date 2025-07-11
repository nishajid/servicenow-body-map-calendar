(function producerScript(current, gForm, gUser, gSNC) {
  current.u_client = gForm.getValue('client');
  current.u_visit_log = gForm.getValue('visit_log');
  current.u_affected_area_description = gForm.getValue('affected_area_description');
  current.u_notes = gForm.getValue('notes');
  current.u_action_date = gForm.getValue('action_date');
  current.u_action_description = gForm.getValue('action_description');
  current.u_follow_up_date = gForm.getValue('follow_up_date');
  current.u_action_status = gForm.getValue('action_status');
})(current, gForm, gUser, gSNC);
