// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
			args.setPromise(WinJS.UI.processAll().done(function () {

                //Enable the title bar color of Windows 10
			    var v = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
			    v.titleBar.buttonBackgroundColor = Windows.UI.Colors.firebrick;
			    v.titleBar.buttonForegroundColor = Windows.UI.Colors.white;
			    v.titleBar.backgroundColor = Windows.UI.Colors.firebrick;
			    v.titleBar.foregroundColor = Windows.UI.Colors.white;

			    //Enable the back button
			    var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
			    systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;

                
			}));

		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.onbackclick = function (evt) {
	    navigateBack();
	    // Need to return true to cancel the default behavior of this event.
	    return true;
	}

    //Starting the app, do not remove
	app.start();