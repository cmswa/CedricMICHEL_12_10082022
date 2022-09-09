/**
 * @description Create a class model to user information to call API
 * @param {Object} data
 * @returns {Object}
 */

export class userDataModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    if (data.score) {
      this.score = data.score;
    } else if (data.todayScore) {
      this.score = data.todayScore;
    }
    this.keyData = data.keyData;
  }
}

/**
 * @description Create a class model to user activity to call API
 * @param {Object} data
 * @returns {Object}
 */

export class userDataActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
    for (let i = 0; i < this.sessions.length; i++) {
      this.sessions[i].day = i + 1;
    }
  }
}

/**
 * @description Create a class model to user performance to call API
 * @param {Object} data
 * @returns {Object}
 */

export class userDataPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}

/**
 * @description Create a class model to user average sessions to call API
 * @param {Object} data
 * @returns {Object}
 */

export class userDataAverangeSessionsModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}