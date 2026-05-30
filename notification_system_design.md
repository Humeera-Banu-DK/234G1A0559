# Notification System Design

## Objective

Implement a Priority Inbox for campus notifications where important unread notifications are displayed before less important ones.

## Notification Priority

Priority is determined using:

1. Notification Type
   - Placement
   - Result
   - Event

2. Recency
   - Newer notifications are preferred over older notifications.

## Weight Assignment

| Type | Weight |
|--------|--------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

## Initial Approach

1. Fetch notifications from the Notification API.
2. Assign weights based on notification type.
3. Sort notifications using weight and timestamp.
4. Display top 10 notifications.

## Future Optimization

To efficiently maintain top 10 notifications when new notifications arrive continuously, a Min Heap of size 10 can be maintained.

Insertion Complexity:
O(log 10)

Space Complexity:
O(10)