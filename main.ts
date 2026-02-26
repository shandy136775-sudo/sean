input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Angry)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("SEAN 67A")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.EighthNote)
    music.play(music.stringPlayable("E D G E A D F C ", 120), music.PlaybackMode.UntilDone)
})
