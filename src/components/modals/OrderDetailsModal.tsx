import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Package, 
  Calendar, 
  MapPin, 
  Truck, 
  CheckCircle, 
  Clock,
  Download,
  MessageCircle 
} from "lucide-react";

interface OrderDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: any;
}

export const OrderDetailsModal = ({ open, onOpenChange, order }: OrderDetailsModalProps) => {
  if (!order) return null;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Shipped":
        return <Truck className="h-4 w-4 text-blue-600" />;
      case "Processing":
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-50 text-green-800 border-green-200";
      case "Shipped":
        return "bg-blue-50 text-blue-800 border-blue-200";
      case "Processing":
        return "bg-orange-50 text-orange-800 border-orange-200";
      default:
        return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };

  // Mock tracking information
  const trackingSteps = [
    { step: "Order Placed", date: order.date, completed: true },
    { step: "Payment Confirmed", date: order.date, completed: true },
    { step: "Preparing for Shipment", date: "2024-01-16", completed: order.status !== "Processing" },
    { step: "Shipped", date: "2024-01-17", completed: order.status === "Delivered" || order.status === "Shipped" },
    { step: "Out for Delivery", date: "2024-01-18", completed: order.status === "Delivered" },
    { step: "Delivered", date: "2024-01-18", completed: order.status === "Delivered" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order Details - {order.id}
          </DialogTitle>
          <DialogDescription>
            View your order information and tracking details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Status */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              {getStatusIcon(order.status)}
              <div>
                <p className="font-semibold">Current Status</p>
                <p className="text-sm text-muted-foreground">Order {order.id}</p>
              </div>
            </div>
            <Badge className={getStatusColor(order.status)}>
              {order.status}
            </Badge>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Order Summary
            </h3>
            <div className="grid gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order Date:</span>
                <span>{order.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Items:</span>
                <span>{order.items} plants</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Amount:</span>
                <span className="font-semibold">{order.total}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Order Items */}
          <div className="space-y-4">
            <h3 className="font-semibold">Items Ordered</h3>
            <div className="space-y-3">
              {order.plants.map((plant: string, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-md"></div>
                    <div>
                      <p className="font-medium">{plant}</p>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$24.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tracking Information */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Truck className="h-4 w-4" />
              Tracking Information
            </h3>
            <div className="space-y-3">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    step.completed ? 'bg-primary' : 'bg-muted'
                  }`} />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${
                        step.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.step}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {step.completed ? step.date : ''}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Delivery Information */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Delivery Address
            </h3>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">
                123 Garden Street<br />
                Green Valley, CA 90210<br />
                United States
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            <Button variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};