$(document).ready(function () {
    // Check for 'Date Signed' text presence
    if ($("p:contains('Date Signed')").length > 0) {
        $('input[name="signature"]').show();
        $('#i_apply, #receive_degree, #my_work, #waive_confidentiality, #abide_rules, #nonrefundable').prop('checked', true);
    } else {
        // Initially hide the button and signature input
        $('button').hide();
        $('input[name="signature"]').hide();

        // Add click event to the specific checkboxes only
        $('input[type="checkbox"].required-checkbox').click(function () {
            // Check if all required checkboxes are checked
            var allChecked = $('input[type="checkbox"].required-checkbox').length === $('input[type="checkbox"].required-checkbox:checked').length;
            
            if (allChecked) {
                $('input[name="signature"]').show();
                $('button').show();
            } else {
                $('input[name="signature"]').hide();
                $('button').hide();
            }
        });
    }
});
