/* eslint-disable react/no-multi-comp */
import React from 'react';

import { CategoryMenu } from './categoryMenu';
import * as Routes from '../../config/navigation/routesBuilder';
import NavigationType from '../../config/navigation/propTypes';

export class LoginMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Login'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.LoginRoutes} />
  );
}

export class ProfileMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Profile'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.NavigationRoutes} />
  );
}

export class GetInvolvedMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Get Involved'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.SocialRoutes} />
  );
}

export class CongressMembersMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Congress Members'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.ArticleRoutes} />
  );
}

export class LegislationMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Legislation'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.MessagingRoutes} />
  );
}

export class PollsMenu extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Polls'.toUpperCase(),
  };
  render = () => (
    <CategoryMenu navigation={this.props.navigation} items={Routes.DashboardRoutes} />
  );
}
