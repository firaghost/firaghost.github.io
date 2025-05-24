/**
 * Floating Action Button functionality for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Initialize tooltip for floating action button
    $('.floating-action-btn').tooltip({
        placement: 'left',
        trigger: 'hover'
    });
    
    // Handle floating action button click
    $('.floating-action-btn').on('click', function(e) {
        e.preventDefault();
        
        // Show demo message
        Swal.fire({
            title: 'Create New Case',
            html: `
                <p>In the live version, this would open a form to create a new legal case.</p>
                <p>The form would include fields for:</p>
                <ul class="text-left">
                    <li>Case title and reference number</li>
                    <li>Client/plaintiff information</li>
                    <li>Defendant information</li>
                    <li>Case type and category</li>
                    <li>Court details</li>
                    <li>Filing date and hearing dates</li>
                    <li>Case description and notes</li>
                </ul>
            `,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Continue to Demo Form',
            cancelButtonText: 'Close',
            confirmButtonColor: '#26B99A',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                // Show a follow-up message with a mock form
                Swal.fire({
                    title: 'New Case Form',
                    html: `
                        <form id="demo-case-form" class="text-left">
                            <div class="form-group">
                                <label for="case-title">Case Title</label>
                                <input type="text" class="form-control" id="case-title" placeholder="Enter case title">
                            </div>
                            <div class="form-group">
                                <label for="case-type">Case Type</label>
                                <select class="form-control" id="case-type">
                                    <option>Civil Litigation</option>
                                    <option>Criminal Litigation</option>
                                    <option>Family Law</option>
                                    <option>Corporate Law</option>
                                    <option>Property Law</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="plaintiff-name">Plaintiff Name</label>
                                <input type="text" class="form-control" id="plaintiff-name" placeholder="Enter plaintiff name">
                            </div>
                            <div class="form-group">
                                <label for="defendant-name">Defendant Name</label>
                                <input type="text" class="form-control" id="defendant-name" placeholder="Enter defendant name">
                            </div>
                            <div class="form-group">
                                <label for="filing-date">Filing Date</label>
                                <input type="date" class="form-control" id="filing-date">
                            </div>
                            <div class="form-group">
                                <label for="case-description">Case Description</label>
                                <textarea class="form-control" id="case-description" rows="3" placeholder="Enter case description"></textarea>
                            </div>
                        </form>
                    `,
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    cancelButtonText: 'Cancel',
                    confirmButtonColor: '#26B99A',
                    cancelButtonColor: '#6c757d',
                    width: '600px'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Demo Mode',
                            text: 'In a live environment, this would create a new case in the database.',
                            icon: 'success',
                            confirmButtonColor: '#26B99A'
                        });
                    }
                });
            }
        });
    });
});
