import Participants from './Participants';

enum QueueType {
    randomized,
    organized
}
enum CycleStatus {
    Pending = "pending",
    Active = "active",
    Suspended = "suspended",
    Completed = "completed"
}

class QueueManagement {

}

class PositionSwapper {

}

class PositionTrader {

}


export default class Cycles {
    //basic Object Definition 

    id: string;
    period: number;
    amount: number;
    maxPositions: number;
    queueType: QueueType;


    cycleAdmins: Participants[] = [];

    //

    positions = new Map<number, Participants>();
    participantPositions = new Map<Participants, Set<number>>();

    started: boolean = false;
    status: CycleStatus = CycleStatus.Pending;

    //object constructor

    constructor(
        id: string,
        period: number,
        amount: number,
        maxPositions: number,
        queueType: QueueType
    ) {
        this.id = id;
        this.period = period;
        this.amount = amount;
        this.maxPositions = maxPositions;
        this.queueType = queueType;

    }

    getId() {
        return this.id;
    }

    getPeriod() {
        return this.period;
    }

    setPeriod(newPeriod: number) {
        this.period = newPeriod;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(newAmount: number) {
        this.amount = newAmount;
    }

    getMaxPositions() {
        return this.maxPositions;
    }

    setMaxPositions(newMaxPositions: number) {
        this.maxPositions = newMaxPositions;
    }

    // CYCLE CRUD METHONDS

    createCycle(id: string, period: number, amount: number, maxPositions: number, queueType: QueueType) {


    }

    showCycleDetails() {

    }

    updateCycle(id: string, newPeriod: number, newAmount: number, newMaxPositions: number, newQueuetype: QueueType) {

    }

    archieveCycle() {

    }

    // POSITION CRUD methods

    assignPosiition() {

    }
    getAssignedPositions() {

    }

    // Generate invitation Link
}
