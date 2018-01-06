export var strings = {
    learn: "Learn",
    tips: "Tips",
    me: "Me",
    learnprogresstext: "{0} of {1} signs completed",
    tipprogresstext: "{0} of {1} signs completed",
    completedpercent: "Completed {0}%",
    clearallprogress: "Clear all progress",
    aboutus: "About us",
    appversion: "App version",
    closeuppercase: "CLOSE",
    delete: "DELETE",
    cancel: "CANCEL",
    devname: "Shashank Swaminathan",
    devBioHeading: "Another frustrated expat",
    devBio: "Speak 5-ish languages and love making softwares that help solve everyday problems.\nAnd Space!, I also love Space!",
    clearprogressconfirm: "All Progress will be permanently lost.\n Are you sure you want to clear your progress?",
}

/**
 * Add a method to String's prototype to format strings with params
 * formatUnicorn method is used by stack overflow 
 */
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};