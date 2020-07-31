import * as moment from 'moment';

/////////////////////// MOMENT EXTENSIONS //////////////////////////
declare module 'moment'
{
    export interface Moment
    {
        isSameDay(date): boolean;
        isSameMonth(date): boolean;
        isSameYear(date): boolean;
    }
}

(moment.fn as any).isSameDay = function (date)
{
    const _self = this as moment.Moment;
    return _self.isSame(date, 'day');
};


(moment.fn as any).isSameMonth = function (date)
{
    const _self = this as moment.Moment;
    return _self.isSame(date, 'month');
};


(moment.fn as any).isSameYear = function (date)
{
    const _self = this as moment.Moment;
    return _self.isSame(date, 'year');
};

/////////////////////// DATE EXTENSIONS //////////////////////////
declare global
{
    interface Date
    {
        toMomentDate(): moment.Moment;
        format(format: string): string;
        isBefore(date: Date): boolean;
        isSame(date: Date): boolean;
        isAfter(date: Date): boolean;
        compareWith(date: Date): number;
    }
}

Date.prototype.toMomentDate = function()
{
    let value = this as Date;
    return moment(value.toISOString());
};

Date.prototype.format = function(format: string)
{
    let value = this as Date;
    let momentDate = value.toMomentDate();

    return momentDate.format(format);
};

Date.prototype.isBefore = function(date: Date)
{
    let value = this as Date;
    let valueMomentDate = value.toMomentDate();
    let momentDate = date.toMomentDate();

    return valueMomentDate.isBefore(momentDate);
};

Date.prototype.isSame = function(date: Date)
{
    let value = this as Date;
    let valueMomentDate = value.toMomentDate();
    let momentDate = date.toMomentDate();

    return valueMomentDate.isSame(momentDate);
};

Date.prototype.isAfter = function(date: Date)
{
    let value = this as Date;
    let valueMomentDate = value.toMomentDate();
    let momentDate = date.toMomentDate();

    return valueMomentDate.isAfter(momentDate);
};

Date.prototype.compareWith = function(date: Date)
{
    let value = this as Date;
    let valueMomentDate = value.toMomentDate();
    let momentDate = date.toMomentDate();

    if (valueMomentDate.isBefore(momentDate))
        return -1;
    else if (valueMomentDate.isSame(momentDate))
        return 0;
    else if (valueMomentDate.isAfter(momentDate))
        return 1;
};