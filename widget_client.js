function($scope, $http) {
  $scope.$on('$viewContentLoaded', function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: $scope.data.events,
      eventClick: function(event) {
        var recordProducerUrl = '/sp?id=view_body_map_update&sys_id=' + event.id;
        window.open(recordProducerUrl, '_blank');
      }
    });
  });
}
