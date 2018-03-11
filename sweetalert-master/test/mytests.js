
// Clicking the confirm-button should dismiss the modal



document.querySelector('#from1').addEventListener('submit', function(e) {
    var form = this;
    e.preventDefault();
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm) {
        if (isConfirm) {
            swal({
                title: 'Shortlisted!',
                text: 'Candidates are successfully shortlisted!',
                type: 'success'
            }, function() {
                form.submit();
            });

        } else {
            swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
    });
});













test("dismiss modal with esc-key", function(assert) {
  var done = assert.async();
  swal("Dismiss me");

  var $modal = $('.sweet-alert');
  $(document).trigger($.Event('keydown', {
    keyCode: 27 
  }));

  setTimeout(function() {
    assert.ok($modal.is(':hidden'));
    done();
  }, 500);
});

test("modals stays on with esc-key if allowEscapeKey is false", function(assert) {
  var done = assert.async();
  swal({
    title: "Dismiss me",
    allowEscapeKey: false
  });

  var $modal = $('.sweet-alert');
  $(document).trigger($.Event('keydown', {
    keyCode: 27 
  }));

  setTimeout(function() {
    assert.ok($modal.is(':visible'));
    done();
  }, 500);
});

