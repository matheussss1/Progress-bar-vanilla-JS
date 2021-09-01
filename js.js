const steps = Array.from(document.querySelectorAll('.step'));
const progress_bar = Array.from(document.querySelectorAll('.progress-bar'));

const stepState = {
    current_step: 0,
    previous_step: null,
    next_step: 1,
    max_step: steps.length - 1,
    active_progress_bar: 0
}

const setEventListener = () => {
    handleChangeStepState();
    const nextStepElement = steps[stepState.next_step] || false
    const prevStepElement = steps[stepState.previous_step] || false
    
    if (nextStepElement) {
        nextStepElement.addEventListener('click', moveStepFoward)
    }

    if (prevStepElement) {
        prevStepElement.addEventListener('click', moveStepBackward)
    }
}

const moveStepFoward = () => {
    stepState.current_step++
    setEventListener()
}

const moveStepBackward = () => {
    stepState.current_step--
    setEventListener()
}

const handleChangeStepState = () => {
    removeListeners();

    const nextStep =  stepState.current_step >= stepState.max_step
                            ? null
                            : stepState.current_step + 1

    const previousStep = stepState.current_step === 0
                            ? null
                            : stepState.current_step - 1
    
    stepState.next_step = nextStep
    stepState.previous_step = previousStep

    console.log(stepState)
} 

const removeListeners = () => {
    const previousStepElement = steps[stepState.previous_step]
    const nextStepElement = steps[stepState.next_step]
    previousStepElement?.removeEventListener('click', moveStepBackward)
    nextStepElement?.removeEventListener('click', moveStepFoward);
}

setEventListener()

const t = progress_bar[stepState.active_progress_bar].classList.add('progress-bar__active')